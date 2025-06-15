import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l7Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '歌う',
      hiragana: 'うたう',
      english: 'to sing',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: 'かぶる',
      hiragana: 'かぶる',
      english: 'to put on (a hat)',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: 'はく',
      hiragana: 'はく',
      english: 'to put on (below waist)',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: '知る',
      hiragana: 'しる',
      english: 'to get to know',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: '住む',
      hiragana: 'すむ',
      english: 'to live',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: '働く',
      hiragana: 'はたらく',
      english: 'to work',
      genki: 7
    },
    {
      type: WordType.UVerb,
      kanji: '太る',
      hiragana: 'ふとる',
      english: 'to gain weight',
      genki: 7
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: 'めがねをかける',
      hiragana: 'めがねをかける',
      english: 'to put on (glasses)',
      genki: 7
    },
    {
      type: WordType.RuVerb,
      kanji: '着る',
      hiragana: 'きる',
      english: 'to put on (above waist)',
      genki: 7
    },
    {
      type: WordType.RuVerb,
      kanji: 'やせる',
      hiragana: 'やせる',
      english: 'to lose weight',
      genki: 7
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '結婚する',
      hiragana: 'けっこんする',
      english: 'to get married',
      genki: 7
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '長い',
      hiragana: 'ながい',
      english: 'long',
      genki: 7
    },
    {
      type: WordType.IAdj,
      kanji: '短い',
      hiragana: 'みじかい',
      english: 'short',
      genki: 7
    },
    {
      type: WordType.IAdj,
      kanji: '早い',
      hiragana: 'はやい',
      english: 'fast',
      genki: 7
    },
    {
      type: WordType.IAdj,
      kanji: '背が高い',
      hiragana: 'せがたかい',
      english: 'tall (stature)',
      genki: 7
    },
    {
      type: WordType.IAdj,
      kanji: '背が低い',
      hiragana: 'せがひくい',
      english: 'short (stature)',
      genki: 7
    },
    {
      type: WordType.IAdj,
      kanji: 'かわいい',
      hiragana: 'かわいい',
      english: 'cute',
      genki: 7
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '親切',
      hiragana: 'しんせつ',
      english: 'kind',
      genki: 7
    },
    {
      type: WordType.NaAdj,
      kanji: '便利',
      hiragana: 'べんり',
      english: 'convenient',
      genki: 7
    },
  ],
  [WordType.IrregularAdj]: [
    {
      type: WordType.IrregularAdj,
      kanji: '頭がいい',
      hiragana: 'あだがいい',
      english: 'smart',
      genki: 7
    },
  ],
}; 