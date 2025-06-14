import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l4Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '会う',
      hiragana: 'あう',
      english: 'to meet',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: 'ある',
      hiragana: 'ある',
      english: 'there is...',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: '買う',
      hiragana: 'かう',
      english: 'to buy',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: '書く',
      hiragana: 'かく',
      english: 'to write',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: '取る',
      hiragana: 'とる',
      english: 'to take',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: '待つ',
      hiragana: 'まつ',
      english: 'to wait',
      genki: 4
    },
    {
      type: WordType.UVerb,
      kanji: 'わかる',
      hiragana: 'わかる',
      english: 'to understand',
      genki: 4
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: 'いる',
      hiragana: 'いる',
      english: '(a person) is in...',
      genki: 4
    },
  ],
  [WordType.SuruVerb]: [],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [],
  [WordType.NaAdj]: [],
  [WordType.IrregularAdj]: [],
}; 