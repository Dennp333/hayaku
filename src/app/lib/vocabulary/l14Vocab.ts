import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l14Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '送る',
      hiragana: 'おくる',
      english: 'to send',
      genki: 14
    },
    {
      type: WordType.UVerb,
      kanji: '似合う',
      hiragana: 'にあう',
      english: 'to look good on',
      genki: 14
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: 'あきらめる',
      hiragana: 'あきらめる',
      english: 'to give up',
      genki: 14
    },
    {
      type: WordType.RuVerb,
      kanji: 'あげる',
      hiragana: 'あげる',
      english: 'to give (to others)',
      genki: 14
    },
    {
      type: WordType.RuVerb,
      kanji: 'くれる',
      hiragana: 'くれる',
      english: 'to give (to me)',
      genki: 14
    },
    {
      type: WordType.RuVerb,
      kanji: 'できる',
      hiragana: 'できる',
      english: 'to come into existence',
      genki: 14
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '相談する',
      hiragana: 'そうだんする',
      english: 'to consult',
      genki: 14
    },
    {
      type: WordType.SuruVerb,
      kanji: '注意する',
      hiragana: 'ちゅういする',
      english: 'to give warning',
      genki: 14
    },
    {
      type: WordType.SuruVerb,
      kanji: 'プロポーズする',
      hiragana: 'ぷろぽーずする',
      english: 'to propose',
      genki: 14
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '欲しい',
      hiragana: 'ほしい',
      english: 'want',
      genki: 14
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: 'おしゃれ',
      hiragana: 'おしゃれ',
      english: 'stylish',
      genki: 14
    },
    {
      type: WordType.NaAdj,
      kanji: 'けち',
      hiragana: 'けち',
      english: 'stingy',
      genki: 14
    }
  ],
  [WordType.IrregularAdj]: [],
}; 