import { Word } from '../types/Word';
import { WordType } from '../types/constants';

export function getVocabulary(): Word[] {
  return [
    {
      type: WordType.RuVerb,
      kanji: '食べる',
      hiragana: 'たべる',
      english: 'to eat',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.UVerb,
      kanji: '行く',
      hiragana: 'いく',
      english: 'to go',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.KuruVerb,
      kanji: '来る',
      hiragana: 'くる',
      english: 'to come',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.SuruVerb,
      kanji: 'する',
      hiragana: 'する',
      english: 'to do',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.IrregularAdj,
      kanji: 'いい',
      hiragana: 'いい',
      english: 'good',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.IAdj,
      kanji: '早い',
      hiragana: 'はやい',
      english: 'early',
      genki: 3,
      jlpt: 5
    },
    {
      type: WordType.NaAdj,
      kanji: '好き',
      hiragana: 'すき',
      english: 'to like',
      genki: 3,
      jlpt: 5
    }
  ];
} 