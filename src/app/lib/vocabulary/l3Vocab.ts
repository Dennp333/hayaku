import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l3Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '行く',
      hiragana: 'いく',
      english: 'to go',
      genki: 3
    },
    {
      type: WordType.UVerb,
      kanji: '帰る',
      hiragana: 'かえる',
      english: 'to return',
      genki: 3
    },
    {
      type: WordType.UVerb,
      kanji: '聞く',
      hiragana: 'きく',
      english: 'to listen',
      genki: 3
    },
    {
      type: WordType.UVerb,
      kanji: '飲む',
      hiragana: 'のむ',
      english: 'to drink',
      genki: 3
    },
    {
      type: WordType.UVerb,
      kanji: '話す',
      hiragana: 'はなす',
      english: 'to talk',
      genki: 3
    },
    {
      type: WordType.UVerb,
      kanji: '読む',
      hiragana: 'よむ',
      english: 'to read',
      genki: 3
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '起きる',
      hiragana: 'おきる',
      english: 'to wake up',
      genki: 3
    },
    {
      type: WordType.RuVerb,
      kanji: '食べる',
      hiragana: 'たべる',
      english: 'to eat',
      genki: 3
    },
    {
      type: WordType.RuVerb,
      kanji: '寝る',
      hiragana: 'ねる',
      english: 'to sleep',
      genki: 3
    },
    {
      type: WordType.RuVerb,
      kanji: '見る',
      hiragana: 'みる',
      english: 'to see',
      genki: 3
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: 'する',
      hiragana: 'する',
      english: 'to do',
      genki: 3
    },
    {
      type: WordType.SuruVerb,
      kanji: '勉強する',
      hiragana: 'べんきょうする',
      english: 'to study',
      genki: 3
    },
  ],
  [WordType.KuruVerb]: [
    {
      type: WordType.KuruVerb,
      kanji: '来る',
      hiragana: 'くる',
      english: 'to come',
      genki: 3
    },
  ],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '早い',
      hiragana: 'はやい',
      english: 'early',
      genki: 3
    },
  ],
  [WordType.NaAdj]: [],
  [WordType.IrregularAdj]: [
    {
      type: WordType.IrregularAdj,
      kanji: 'いい',
      hiragana: 'いい',
      english: 'good',
      genki: 3
    },
  ],
};