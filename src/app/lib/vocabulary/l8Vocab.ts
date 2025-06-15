import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l8Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '洗う',
      hiragana: 'あらう',
      english: 'to wash',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '言う',
      hiragana: 'いう',
      english: 'to say',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '要る',
      hiragana: 'いる',
      english: 'to need',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '遅くなる',
      hiragana: 'おそくなる',
      english: 'to be late',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '切る',
      hiragana: 'きる',
      english: 'to cut',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '作る',
      hiragana: 'つくる',
      english: 'to make',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '降る',
      hiragana: 'ふる',
      english: '(rain/snow) falls',
      genki: 8
    },
    {
      type: WordType.UVerb,
      kanji: '持っていく',
      hiragana: 'もっていく',
      english: 'to take (a thing)',
      genki: 8
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '捨てる',
      hiragana: 'すてる',
      english: 'to throw away',
      genki: 8
    },
    {
      type: WordType.RuVerb,
      kanji: '始める',
      hiragana: 'はじめる',
      english: 'to begin',
      genki: 8
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '運転する',
      hiragana: 'うんてんする',
      english: 'to drive',
      genki: 8
    },
    {
      type: WordType.SuruVerb,
      kanji: '洗濯する',
      hiragana: 'せんたくする',
      english: 'to do laundry',
      genki: 8
    },
    {
      type: WordType.SuruVerb,
      kanji: '掃除する',
      hiragana: 'そうじする',
      english: 'to clean',
      genki: 8
    },
    {
      type: WordType.SuruVerb,
      kanji: '料理する',
      hiragana: 'りょうりする',
      english: 'to cook',
      genki: 8
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '上手',
      hiragana: 'じょうず',
      english: 'good at',
      genki: 8
    },
    {
      type: WordType.NaAdj,
      kanji: '下手',
      hiragana: 'へた',
      english: 'bad at',
      genki: 8
    },
    {
      type: WordType.NaAdj,
      kanji: '有名',
      hiragana: 'ゆうめい',
      english: 'famous',
      genki: 8
    },
  ],
  [WordType.IrregularAdj]: [],
}; 