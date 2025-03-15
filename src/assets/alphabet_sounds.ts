type IAlphabet_Audio_Sources = {
  [key: string]: {
    name: string;
    sound: string;
  };
};

// Only load files when needed // TODO: Maybe try this?
// export const getAudioSource = (letter: string) => ({
//   name: require(`assets/alphabet/audio/name/${letter}.mp3`),
//   sound: require(`assets/alphabet/audio/sound/${letter}.mp3`)
// }); // Dynamic asset loading not supported in RN?

export const ALPHABET_AUDIO_SOURCES: IAlphabet_Audio_Sources = {
  a: {
    name: require("assets/alphabet/audio/name/a.mp3"),
    sound: require("assets/alphabet/audio/sound/a.mp3"),
  },
  b: {
    name: require("assets/alphabet/audio/name/b.mp3"),
    sound: require("assets/alphabet/audio/sound/b.mp3"),
  },
  c: {
    name: require("assets/alphabet/audio/name/c.mp3"),
    sound: require("assets/alphabet/audio/sound/c.mp3"),
  },
  d: {
    name: require("assets/alphabet/audio/name/d.mp3"),
    sound: require("assets/alphabet/audio/sound/d.mp3"),
  },
  e: {
    name: require("assets/alphabet/audio/name/e.mp3"),
    sound: require("assets/alphabet/audio/sound/e.mp3"),
  },
  f: {
    name: require("assets/alphabet/audio/name/f.mp3"),
    sound: require("assets/alphabet/audio/sound/f.mp3"),
  },
  g: {
    name: require("assets/alphabet/audio/name/g.mp3"),
    sound: require("assets/alphabet/audio/sound/g.mp3"),
  },
  h: {
    name: require("assets/alphabet/audio/name/h.mp3"),
    sound: require("assets/alphabet/audio/sound/h.mp3"),
  },
  i: {
    name: require("assets/alphabet/audio/name/i.mp3"),
    sound: require("assets/alphabet/audio/sound/i.mp3"),
  },
  j: {
    name: require("assets/alphabet/audio/name/j.mp3"),
    sound: require("assets/alphabet/audio/sound/j.mp3"),
  },
  k: {
    name: require("assets/alphabet/audio/name/k.mp3"),
    sound: require("assets/alphabet/audio/sound/k.mp3"),
  },
  l: {
    name: require("assets/alphabet/audio/name/l.mp3"),
    sound: require("assets/alphabet/audio/sound/l.mp3"),
  },
  m: {
    name: require("assets/alphabet/audio/name/m.mp3"),
    sound: require("assets/alphabet/audio/sound/m.mp3"),
  },
  n: {
    name: require("assets/alphabet/audio/name/n.mp3"),
    sound: require("assets/alphabet/audio/sound/n.mp3"),
  },
  o: {
    name: require("assets/alphabet/audio/name/o.mp3"),
    sound: require("assets/alphabet/audio/sound/o.mp3"),
  },
  p: {
    name: require("assets/alphabet/audio/name/p.mp3"),
    sound: require("assets/alphabet/audio/sound/p.mp3"),
  },
  q: {
    name: require("assets/alphabet/audio/name/q.mp3"),
    sound: require("assets/alphabet/audio/sound/q.mp3"),
  },
  r: {
    name: require("assets/alphabet/audio/name/r.mp3"),
    sound: require("assets/alphabet/audio/sound/r.mp3"),
  },
  s: {
    name: require("assets/alphabet/audio/name/s.mp3"),
    sound: require("assets/alphabet/audio/sound/s.mp3"),
  },
  t: {
    name: require("assets/alphabet/audio/name/t.mp3"),
    sound: require("assets/alphabet/audio/sound/t.mp3"),
  },
  u: {
    name: require("assets/alphabet/audio/name/u.mp3"),
    sound: require("assets/alphabet/audio/sound/u.mp3"),
  },
  v: {
    name: require("assets/alphabet/audio/name/v.mp3"),
    sound: require("assets/alphabet/audio/sound/v.mp3"),
  },
  w: {
    name: require("assets/alphabet/audio/name/w.mp3"),
    sound: require("assets/alphabet/audio/sound/w.mp3"),
  },
  x: {
    name: require("assets/alphabet/audio/name/x.mp3"),
    sound: require("assets/alphabet/audio/sound/x.mp3"),
  },
  y: {
    name: require("assets/alphabet/audio/name/y.mp3"),
    sound: require("assets/alphabet/audio/sound/y.mp3"),
  },
  z: {
    name: require("assets/alphabet/audio/name/z.mp3"),
    sound: require("assets/alphabet/audio/sound/z.mp3"),
  },
};
