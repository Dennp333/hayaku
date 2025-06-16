import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l11Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: 'うそをつく',
      hiragana: 'うそをつく',
      english: 'to lie',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: 'おなかがすく',
      hiragana: 'おなかがすく',
      english: 'to be hungry',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: '飼う',
      hiragana: 'かう',
      english: 'to own (a pet)',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: 'サボる',
      hiragana: 'さぼる',
      english: 'to cut (classes)',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: '習う',
      hiragana: 'ならう',
      english: 'to learn',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: '登る',
      hiragana: 'のぼる',
      english: 'to climb',
      genki: 11
    },
    {
      type: WordType.UVerb,
      kanji: '走る',
      hiragana: 'はしる',
      english: 'to run',
      genki: 11
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '疲れる',
      hiragana: 'つかれる',
      english: 'to get tired',
      genki: 11
    },
    {
      type: WordType.RuVerb,
      kanji: 'やめる',
      hiragana: 'やめる',
      english: 'to quit',
      genki: 11
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: 'けんかする',
      hiragana: 'けんかする',
      english: 'to fight',
      genki: 11
    },
    {
      type: WordType.SuruVerb,
      kanji: '紹介する',
      hiragana: 'しょうかいする',
      english: 'to introduce',
      genki: 11
    },
    {
      type: WordType.SuruVerb,
      kanji: 'ダイエットする',
      hiragana: 'だいえっとする',
      english: 'to go on a diet',
      genki: 11
    },
    {
      type: WordType.SuruVerb,
      kanji: '遅刻する',
      hiragana: 'ちこくする',
      english: 'to be late',
      genki: 11
    },
    {
      type: WordType.SuruVerb,
      kanji: '留学する',
      hiragana: 'りゅうがくする',
      english: 'to study abroad',
      genki: 11
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [],
  [WordType.NaAdj]: [],
  [WordType.IrregularAdj]: [],
}; 