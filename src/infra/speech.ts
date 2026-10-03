const ONLINE = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=lo&q=';

export class Speech {
  private voices: SpeechSynthesisVoice[] = [];
  private voice?: SpeechSynthesisVoice;
  private audio = new Audio();
  private finish = () => {};
  rate = 0.85;

  constructor(private onChange: (s: Speech) => void, private onFail: () => void) {
    if (!('speechSynthesis' in window)) return;
    const load = () => {
      this.voices = speechSynthesis.getVoices().filter(v => /^lo/i.test(v.lang));
      this.voice = this.voices.find(v => v === this.voice) ?? this.voices.find(v => /natural|online/i.test(v.name)) ?? this.voices[0];
      this.onChange(this);
    };
    load();
    speechSynthesis.addEventListener('voiceschanged', load);
  }

  get list() { return this.voices; }
  get current() { return this.voice; }

  stop() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    this.audio.pause();
    this.finish();
  }

  select(name: string) { this.voice = this.voices.find(v => v.name === name); }

  say(text: string): Promise<void> {
    const clean = text.replace(/\.{3}|…/g, ' ').trim();
    return this.voice ? this.native(clean, this.voice) : this.online(clean);
  }

  private native(text: string, voice: SpeechSynthesisVoice) {
    this.stop();
    return new Promise<void>(done => {
      const u = new SpeechSynthesisUtterance(text);
      Object.assign(u, { voice, lang: voice.lang, rate: this.rate, onend: done, onerror: done });
      speechSynthesis.speak(u);
    });
  }

  private online(text: string) {
    this.stop();
    this.audio.src = ONLINE + encodeURIComponent(text);
    this.audio.playbackRate = this.rate;
    return new Promise<void>(done => {
      this.finish = done;
      this.audio.onended = () => done();
      this.audio.play().catch(() => { this.onFail(); done(); });
    });
  }
}
