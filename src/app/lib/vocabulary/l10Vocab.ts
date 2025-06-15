import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l10Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: 'かかる',
      hiragana: 'かかる',
      english: 'to take (time/money)',
      genki: 10
    },
    {
      type: WordType.UVerb,
      kanji: '泊まる',
      hiragana: 'とまる',
      english: 'to stay',
      genki: 10
    },
    {
      type: WordType.UVerb,
      kanji: 'なる',
      hiragana: 'なる',
      english: 'to become',
      genki: 10
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '決める',
      hiragana: 'きめる',
      english: 'to decide',
      genki: 10
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: 'ごろごろする',
      hiragana: 'ごろごろする',
      english: 'to chill at home',
      genki: 10
    },
    {
      type: WordType.SuruVerb,
      kanji: '旅行する',
      hiragana: 'りょこうする',
      english: 'to travel',
      genki: 10
    },
    {
      type: WordType.SuruVerb,
      kanji: '練習する',
      hiragana: 'れんしゅうする',
      english: 'to practice',
      genki: 10
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '暖かい',
      hiragana: 'あたたかい',
      english: 'warm',
      genki: 10
    },
    {
      type: WordType.IAdj,
      kanji: '涼しい',
      hiragana: 'すずしい',
      english: 'cool',
      genki: 10
    },
    {
      type: WordType.IAdj,
      kanji: '冷たい',
      hiragana: 'つめたい',
      english: 'cold',
      genki: 10
    },
    {
      type: WordType.IAdj,
      kanji: '遅い',
      hiragana: 'おそい',
      english: 'late',
      genki: 10
    },
    {
      type: WordType.IAdj,
      kanji: '眠い',
      hiragana: 'ねむい',
      english: 'sleepy',
      genki: 10
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '簡単',
      hiragana: 'かんたん',
      english: 'easy',
      genki: 10
    },
  ],
  [WordType.IrregularAdj]: [],
}; 