import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l13Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '編む',
      hiragana: 'あむ',
      english: 'to knit',
      genki: 13
    },{
      type: WordType.UVerb,
      kanji: '頑張る',
      hiragana: 'がんばる',
      english: 'to work hard',
      genki: 13
    },
    {
      type: WordType.UVerb,
      kanji: '泣く',
      hiragana: 'なく',
      english: 'to cry',
      genki: 13
    },
    {
      type: WordType.UVerb,
      kanji: '磨く',
      hiragana: 'みがく',
      english: 'to brush',
      genki: 13
    },
    {
      type: WordType.UVerb,
      kanji: '約束を守る',
      hiragana: 'やくそくをまもる',
      english: 'to keep a promise',
      genki: 13
    },
  ],
  [WordType.RuVerb]: [],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '感動する',
      hiragana: 'かんどうする',
      english: 'to be moved',
      genki: 13
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: 'うれしい',
      hiragana: 'うれしい',
      english: 'happy',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: '悲しい',
      hiragana: 'かなしい',
      english: 'sad',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: '厳しい',
      hiragana: 'きびしい',
      english: 'strict',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: '気分が悪い',
      hiragana: 'きぶんがわるい',
      english: 'sick',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: '辛い',
      hiragana: 'からい',
      english: 'spicy',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: 'すごい',
      hiragana: 'すごい',
      english: 'incredible',
      genki: 13
    },
    {
      type: WordType.IAdj,
      kanji: '近い',
      hiragana: 'ちかい',
      english: 'near',
      genki: 13
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: 'いろいろ',
      hiragana: 'いろいろ',
      english: 'various',
      genki: 13
    },
    {
      type: WordType.NaAdj,
      kanji: '幸せ',
      hiragana: 'しあわせ',
      english: 'happy',
      genki: 13
    },
    {
      type: WordType.NaAdj,
      kanji: 'だめ',
      hiragana: 'だめ',
      english: 'no good',
      genki: 13
    },
  ],
  [WordType.IrregularAdj]: [],
}; 