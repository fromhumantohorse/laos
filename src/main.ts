import { VOCAB } from './data/vocab';
import { PHRASES } from './data/phrases';
import { LESSONS } from './data/course';
import { examplesOf, shuffle, norm, type Entry } from './domain';
import { Speech } from './infra/speech';
import { store } from './infra/store';
import * as T from './ui/templates';

const QUIZ_LENGTH = 8;
const QUIZ_CHOICES = 4;
const QUIZ_NEXT_MS = 700;
const QUIZ_NEXT_WRONG_MS = 1600;
const AUTOPLAY_GAP_MS = 500;
const TOAST_MS = 6000;

const $ = <E extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as E;
const cats = (list: Entry[]) => [...new Set(list.map(e => e.cat))];

const toast = (msg: string) => {
  const t = $('#toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), TOAST_MS);
};

const speech = new Speech(s => {
  $('#voice-dot').className = s.current ? 'dot live' : 'dot';
  $<HTMLSelectElement>('#voice').innerHTML = s.list.length
    ? s.list.map(v => `<option${v === s.current ? ' selected' : ''}>${v.name}</option>`).join('')
    : '<option>Voix en ligne (secours)</option>';
}, () => toast('🔇 Aucune voix lao disponible. Ouvre le site dans <b>Microsoft Edge</b> pour les voix neuronales laotiennes (Keomany ♀ / Chanthavong ♂).'));

let playToken = 0;
const play = async (el: HTMLElement) => {
  document.querySelectorAll('.speaking').forEach(x => x.classList.remove('speaking'));
  el.classList.add('speaking');
  await speech.say(el.dataset.say!);
  el.classList.remove('speaking');
};
const playAll = async (sel: string) => {
  const token = ++playToken;
  for (const el of document.querySelectorAll<HTMLElement>(sel)) {
    if (token !== playToken) return;
    el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    await play(el);
    await new Promise(r => setTimeout(r, AUTOPLAY_GAP_MS));
  }
  if (token === playToken) playToken = 0;
};
const stopAll = () => { playToken = 0; speech.stop(); };
const toggleAutoplay = async (btn: HTMLElement, sel: string) => {
  if (playToken) { stopAll(); return; }
  btn.textContent = '■ Stop';
  await playAll(sel);
  btn.textContent = '▶ Écoute auto';
};

const listView = (root: string, data: Entry[], render: (e: Entry, n: number) => string) => {
  const state = { q: '', cat: 'Tout' };
  const draw = () => {
    const q = norm(state.q);
    const shown = data
      .map((e, i) => [e, i + 1] as const)
      .filter(([e]) => state.cat === 'Tout' || e.cat === state.cat)
      .filter(([e]) => !q || [e.lo, e.ro, e.fr].some(s => norm(s).includes(q)));
    $(`${root} .chips`).innerHTML = T.chips(cats(data), state.cat);
    $(`${root} .count`).textContent = `${shown.length} / ${data.length}`;
    $(`${root} .list`).innerHTML = shown.map(([e, n]) => render(e, n)).join('') || '<p class="empty">Aucun résultat 🤷</p>';
  };
  $(root).addEventListener('input', e => { if ((e.target as HTMLElement).matches('.search')) { state.q = (e.target as HTMLInputElement).value; draw(); } });
  $(root).addEventListener('click', e => {
    const t = e.target as HTMLElement;
    const chip = t.closest<HTMLElement>('[data-cat]');
    if (chip) { state.cat = chip.dataset.cat!; draw(); }
    if (t.closest('.mask')) $(root).classList.toggle('masked');
    const auto = t.closest<HTMLElement>('.auto');
    if (auto) toggleAutoplay(auto, `${root} .list [data-say]`);
  });
  draw();
};

const course = (() => {
  let current = store.get('lesson', LESSONS[0].id);
  const done = new Set(store.get<string[]>('done', []));
  const quiz = { items: [] as T.QuizItem[], i: 0, score: 0, round: 0 };

  const index = () => Math.max(0, LESSONS.findIndex(l => l.id === current));

  const distractors = (q: Entry, pool: Entry[]) => {
    const seen = new Set([q.fr, q.lo]);
    return shuffle(pool).filter(e => !seen.has(e.fr) && !seen.has(e.lo) && !!seen.add(e.fr).add(e.lo)).slice(0, QUIZ_CHOICES - 1);
  };

  const drawQuiz = () => {
    const item = quiz.items[quiz.i];
    $('#quiz').innerHTML = item ? T.quizQuestion(item, quiz.i, quiz.items.length, quiz.score) : T.quizEnd(quiz.score, quiz.items.length);
  };
  const startQuiz = () => {
    const examples = examplesOf(LESSONS[index()].blocks).filter(e => !e.lo.includes('...'));
    const source = examples.length >= QUIZ_CHOICES ? examples : VOCAB.slice(0, 80);
    const pool = [...source, ...VOCAB];
    quiz.items = shuffle(source).slice(0, QUIZ_LENGTH).map((q, k) => ({ q, reverse: k % 2 === 1, options: shuffle([q, ...distractors(q, pool)]) }));
    Object.assign(quiz, { i: 0, score: 0, round: quiz.round + 1 });
    drawQuiz();
  };
  const answer = (opt: HTMLButtonElement) => {
    const right = opt.dataset.answer === 'true';
    const round = quiz.round;
    quiz.score += Number(right);
    document.querySelectorAll<HTMLButtonElement>('#quiz .opt').forEach(b => { b.disabled = true; b.classList.add(b.dataset.answer === 'true' ? 'good' : b === opt ? 'bad' : 'dim'); });
    setTimeout(() => { if (round !== quiz.round) return; quiz.i++; drawQuiz(); }, right ? QUIZ_NEXT_MS : QUIZ_NEXT_WRONG_MS);
  };

  const draw = () => {
    const i = index();
    const pct = Math.round(done.size / LESSONS.length * 100);
    $('#progress-bar').style.width = `${pct}%`;
    $('#progress-txt').textContent = `${done.size}/${LESSONS.length} leçons · ${pct}%`;
    $('#lesson-nav').innerHTML = LESSONS.map((l, k) => T.lessonItem(l, k, k === i, done.has(l.id))).join('');
    $('#lesson').innerHTML = T.lesson(LESSONS[i], i, done.has(LESSONS[i].id));
    startQuiz();
  };
  const go = (id: string) => { current = id; store.set('lesson', id); draw(); $('#lesson').scrollIntoView({ behavior: 'smooth' }); };

  $('#course').addEventListener('click', e => {
    const t = e.target as HTMLElement;
    const item = t.closest<HTMLElement>('[data-lesson]');
    const step = t.closest<HTMLElement>('[data-step]');
    const mark = t.closest<HTMLElement>('[data-done]');
    const opt = t.closest<HTMLButtonElement>('.opt');
    if (item) go(item.dataset.lesson!);
    if (step) go(LESSONS[Math.min(LESSONS.length - 1, Math.max(0, index() + Number(step.dataset.step)))].id);
    if (mark) { done.has(current) ? done.delete(current) : done.add(current); store.set('done', [...done]); draw(); }
    if (t.closest('[data-quiz]')) startQuiz();
    if (opt && !opt.disabled) answer(opt);
  });
  return { draw };
})();

const tabs = (name: string) => {
  document.querySelectorAll<HTMLElement>('[data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === name));
  document.querySelectorAll<HTMLElement>('main > section').forEach(s => s.hidden = s.id !== name);
  store.set('tab', name);
};

document.addEventListener('click', e => {
  const t = e.target as HTMLElement;
  const tab = t.closest<HTMLElement>('[data-tab]');
  const all = t.closest<HTMLElement>('[data-play-all]');
  const say = t.closest<HTMLElement>('[data-say]');
  if (tab) tabs(tab.dataset.tab!);
  if (all) { stopAll(); playAll(all.dataset.playAll!); }
  if (say) { say.classList.toggle('reveal'); play(say); }
});
document.addEventListener('keydown', e => {
  const say = (e.target as HTMLElement).closest<HTMLElement>('article[data-say], .bubble[data-say], .q[data-say]');
  if (!say || (e.key !== 'Enter' && e.key !== ' ')) return;
  e.preventDefault();
  say.click();
});
$<HTMLSelectElement>('#voice').addEventListener('change', e => speech.select((e.target as HTMLSelectElement).value));
$<HTMLInputElement>('#rate').addEventListener('input', e => {
  speech.rate = Number((e.target as HTMLInputElement).value);
  $('#rate-val').textContent = `×${speech.rate.toFixed(2)}`;
});

$('#stat-words').textContent = String(VOCAB.filter(v => v.core).length);
$('#stat-phrases').textContent = String(PHRASES.length);
$('#stat-lessons').textContent = String(LESSONS.length);
listView('#vocab', VOCAB, T.card);
listView('#phrases', PHRASES, (e, n) => T.row(e, n));
course.draw();
tabs(store.get('tab', 'vocab'));
