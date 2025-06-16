import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l20Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '曲がる',
      hiragana: 'まがる',
      english: 'to turn',
      genki: 20
    },
    {
      type: WordType.UVerb,
      kanji: '戻る',
      hiragana: 'もどる',
      english: 'to return',
      genki: 20
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '聞こえる',
      hiragana: 'きこえる',
      english: 'to be audible',
      genki: 20
    },
    {
      type: WordType.RuVerb,
      kanji: '伝える',
      hiragana: 'つたえる',
      english: 'to convey message',
      genki: 20
    },
    {
      type: WordType.RuVerb,
      kanji: '待たせる',
      hiragana: 'またせる',
      english: 'to keep someonewaiting',
      genki: 20
    },
    {
      type: WordType.RuVerb,
      kanji: '続ける',
      hiragana: 'つづける',
      english: 'to continue',
      genki: 20
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '交換する',
      hiragana: 'こうかんする',
      english: 'to exchange',
      genki: 20
    },
    {
      type: WordType.SuruVerb,
      kanji: '返品する',
      hiragana: 'へんぴんする',
      english: 'to return',
      genki: 20
    },
    {
      type: WordType.SuruVerb,
      kanji: '生活する',
      hiragana: 'せいかつする',
      english: 'to lead a life',
      genki: 20
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '重い',
      hiragana: 'おもい',
      english: 'heavy',
      genki: 20
    },
    {
      type: WordType.IAdj,
      kanji: '軽い',
      hiragana: 'かるい',
      english: 'light',
      genki: 20
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '不思議',
      hiragana: 'ふしぎ',
      english: 'mysterious',
      genki: 20
    },
  ],
  [WordType.IrregularAdj]: [],
}; 