export type Entry = { lo: string; ro: string; fr: string; cat: string; core?: boolean };
export type Level = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export type Block = { h: string; p?: string; ex?: string; dlg?: string; grid?: string; tip?: string; warn?: string };
export type Line = Entry & { who: string };
export type Lesson = { id: string; lvl: Level; t: string; icon: string; goal: string; blocks: Block[] };
export type Tile = { glyph: string; ro: string; say: string; note: string; tag: string };

const cells = (line: string) => line.split('|').map(s => s.trim());
const lines = (raw: string) => raw.trim().split('\n').filter(Boolean);

export const parseEntries = (raw: string, cat = ''): Entry[] =>
  lines(raw).map(l => { const [lo, ro, fr] = cells(l); return { lo, ro, fr, cat }; });

export const parseDialogue = (raw: string): Line[] =>
  lines(raw).map(l => { const [who, lo, ro, fr] = cells(l); return { who, lo, ro, fr, cat: who }; });

export const examplesOf = (blocks: Block[]): Entry[] =>
  blocks.flatMap(b => [...(b.ex ? parseEntries(b.ex) : []), ...(b.dlg ? parseDialogue(b.dlg) : [])]);

export const parseTiles = (raw: string): Tile[] =>
  lines(raw).map(l => { const [glyph, ro, say, note, tag = ''] = cells(l); return { glyph, ro, say, note, tag }; });

export const catalog = (groups: Record<string, string>): Entry[] => {
  const seen = new Set<string>();
  return Object.entries(groups)
    .flatMap(([cat, raw]) => parseEntries(raw, cat))
    .filter(e => !seen.has(e.lo) && !!seen.add(e.lo));
};

export const withCore = (all: Entry[], size: number): Entry[] => {
  const byCat = Map.groupBy(all, e => e.cat);
  const quota = new Map([...byCat].map(([c, es]) => [c, Math.round(es.length * size / all.length)]));
  const diff = size - [...quota.values()].reduce((a, b) => a + b, 0);
  const first = [...quota.keys()][0];
  quota.set(first, quota.get(first)! + diff);
  return [...byCat].flatMap(([c, es]) => es.map((e, i) => ({ ...e, core: i < quota.get(c)! })));
};

export const shuffle = <T>(a: T[]): T[] => a.map(v => [Math.random(), v] as const).sort((x, y) => x[0] - y[0]).map(([, v]) => v);
export const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
