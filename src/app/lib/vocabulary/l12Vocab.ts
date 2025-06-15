import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l12Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '歩く',
      hiragana: 'あるく',
      english: 'to walk',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: '風邪をひく',
      hiragana: 'かぜをひく',
      english: 'to catch a cold',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: '熱がある',
      hiragana: 'ねつがある',
      english: 'to have a fever',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: 'のどが渇く',
      hiragana: 'のどがかわく',
      english: 'to be thirsty',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: '払う',
      hiragana: 'はらう',
      english: 'to pay',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: 'なくす',
      hiragana: 'なくす',
      english: 'to lose',
      genki: 12
    },
    {
      type: WordType.UVerb,
      kanji: '興味がある',
      hiragana: 'きょうみがある',
      english: 'to be interested in',
      genki: 12
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: 'せきが出る',
      hiragana: 'せきがでる',
      english: 'to cough',
      genki: 12
    },
    {
      type: WordType.RuVerb,
      kanji: '別れる',
      hiragana: 'わかれる',
      english: 'to break up',
      genki: 12
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '緊張する',
      hiragana: 'きんちょうする',
      english: 'to get nervous',
      genki: 12
    },
    {
      type: WordType.SuruVerb,
      kanji: '心配する',
      hiragana: 'しんぱいする',
      english: 'to worry',
      genki: 12
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '狭い',
      hiragana: 'せまい',
      english: 'narrow',
      genki: 12
    },
    {
      type: WordType.IAdj,
      kanji: '広い',
      hiragana: 'ひろい',
      english: 'wide',
      genki: 12
    },
    {
      type: WordType.IAdj,
      kanji: '悪い',
      hiragana: 'わるい',
      english: 'bad',
      genki: 12
    },
    {
      type: WordType.IAdj,
      kanji: '痛い',
      hiragana: 'いたい',
      english: 'painful',
      genki: 12
    },
    {
      type: WordType.IAdj,
      kanji: '甘い',
      hiragana: 'あまい',
      english: 'sweet',
      genki: 12
    },
    {
      type: WordType.IAdj,
      kanji: '多い',
      hiragana: 'おおい',
      english: 'many',
      genki: 12
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '素敵',
      hiragana: 'すてき',
      english: 'nice',
      genki: 12
    },
  ],
  [WordType.IrregularAdj]: [],
}; 