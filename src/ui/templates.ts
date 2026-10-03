import { parseEntries, parseDialogue, parseTiles, type Entry, type Lesson, type Block } from '../domain';

const PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';
const hue = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 11);

export const LEVELS: Record<string, string> = { A0: 'Débutant absolu', A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Avancé', C1: 'Expert' };

export const card = (e: Entry, n: number) => `
<article class="card" tabindex="0" role="button" data-say="${e.lo}" style="--h:${hue(e.cat)}">
  <header><span class="rank">${n}</span><span class="tag">${e.core === false ? 'bonus · ' : ''}${e.cat}</span></header>
  <div class="lo">${e.lo}</div><div class="ro">${e.ro}</div><div class="fr">${e.fr}</div>
  <span class="play">${PLAY}</span>
</article>`;

export const row = (e: Entry, n?: number) => `
<article class="row" tabindex="0" role="button" data-say="${e.lo}" style="--h:${hue(e.cat || e.lo)}">
  <span class="play">${PLAY}</span>
  ${n ? `<span class="rank">${n}</span>` : ''}
  <div class="txt"><div class="lo">${e.lo}</div><div class="ro">${e.ro}</div></div>
  <div class="fr">${e.fr}</div>
</article>`;

export const chips = (cats: string[], active: string) =>
  ['Tout', ...cats].map(c => `<button class="chip${c === active ? ' on' : ''}" data-cat="${c}" style="--h:${hue(c)}">${c}</button>`).join('');

const tiles = (raw: string) => `<div class="tiles">${parseTiles(raw).map(t => `
<button class="tile" data-say="${t.say}">
  <span class="cls ${t.tag}">${t.tag}</span>
  <span class="glyph">${t.glyph}</span><b>${t.ro}</b><small>${t.note}</small>
</button>`).join('')}</div>`;

const dialogue = (raw: string, id: string) => `
<div class="dlg" id="${id}">
  <button class="btn ghost small" data-play-all="#${id} [data-say]">▶ Écouter tout le dialogue</button>
  ${parseDialogue(raw).map((l, i) => `
  <div class="bubble ${i % 2 ? 'right' : 'left'}" tabindex="0" role="button" data-say="${l.lo}">
    <small>${l.who}</small><div class="lo">${l.lo}</div><div class="ro">${l.ro}</div><div class="fr">${l.fr}</div>
  </div>`).join('')}
</div>`;

const block = (b: Block, id: string) => `
<section class="block">
  <h3>${b.h}</h3>
  ${b.p ? `<div class="prose">${b.p}</div>` : ''}
  ${b.grid ? tiles(b.grid) : ''}
  ${b.dlg ? dialogue(b.dlg, id) : ''}
  ${b.ex ? `<div class="rows">${parseEntries(b.ex).map(e => row(e)).join('')}</div>` : ''}
  ${b.warn ? `<aside class="tip warn"><span>⚠️</span><p>${b.warn}</p></aside>` : ''}
  ${b.tip ? `<aside class="tip"><span>💡</span><p>${b.tip}</p></aside>` : ''}
</section>`;

export const lessonItem = (l: Lesson, i: number, active: boolean, done: boolean) => `
<button class="lesson-item${active ? ' on' : ''}${done ? ' done' : ''}" data-lesson="${l.id}">
  <span class="ico">${done ? '✓' : l.icon}</span>
  <span class="li-t"><small>${String(i + 1).padStart(2, '0')} · ${l.lvl}</small>${l.t}</span>
</button>`;

export const lesson = (l: Lesson, i: number, done: boolean) => `
<div class="lesson-head lvl-${l.lvl}">
  <span class="big-ico">${l.icon}</span>
  <div><p class="eyebrow">Leçon ${i + 1} · ${l.lvl} — ${LEVELS[l.lvl]}</p><h2>${l.t}</h2><p class="goal">${l.goal}</p></div>
</div>
${l.blocks.map((b, k) => block(b, `${l.id}-${k}`)).join('')}
<section class="block quiz" id="quiz"></section>
<div class="lesson-foot">
  <button class="btn ghost" data-step="-1">← Précédente</button>
  <button class="btn ${done ? 'ok' : 'primary'}" data-done="${l.id}">${done ? '✓ Leçon acquise' : 'Marquer comme acquise'}</button>
  <button class="btn ghost" data-step="1">Suivante →</button>
</div>`;

export type QuizItem = { q: Entry; reverse: boolean; options: Entry[] };

const prompt = (q: Entry, reverse: boolean) => reverse
  ? `<div class="q"><span class="fr-q">${q.fr}</span></div>`
  : `<div class="q" tabindex="0" role="button" data-say="${q.lo}"><span class="play">${PLAY}</span><span class="lo">${q.lo}</span><span class="ro">${q.ro}</span></div>`;

const option = (o: Entry, isRight: boolean, reverse: boolean) => reverse
  ? `<button class="opt" data-answer="${isRight}" data-say="${o.lo}"><span class="lo">${o.lo}</span><small>${o.ro}</small></button>`
  : `<button class="opt" data-answer="${isRight}">${o.fr}</button>`;

export const quizQuestion = ({ q, reverse, options }: QuizItem, idx: number, total: number, score: number) => `
<h3>🎯 Entraînement <small>${idx + 1}/${total} · score ${score}</small></h3>
<p class="hint">${reverse ? 'Comment dit-on en lao ?' : 'Que signifie ?'}</p>
${prompt(q, reverse)}
<div class="opts">${options.map(o => option(o, o === q, reverse)).join('')}</div>`;

export const quizEnd = (score: number, total: number) => `
<h3>🎯 Entraînement terminé</h3>
<p class="score">${score} / ${total} ${score === total ? '🏆 Parfait !' : score >= total / 2 ? '👏 Bien joué' : '💪 Réécoute et réessaie'}</p>
<button class="btn primary" data-quiz="restart">Recommencer</button>`;
