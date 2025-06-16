import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l18Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '開く',
      hiragana: 'あく',
      english: 'something opens',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '閉まる',
      hiragana: 'しまる',
      english: 'something closes',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '謝る',
      hiragana: 'あやまる',
      english: 'to apologize',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '押す',
      hiragana: 'おす',
      english: 'to push',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '落とす',
      hiragana: 'おとす',
      english: 'to drop',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: 'お湯が沸く',
      hiragana: 'おゆがわく',
      english: 'water boils',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '転ぶ',
      hiragana: 'ころぶ',
      english: 'to fall down',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '壊す',
      hiragana: 'こわす',
      english: 'to break',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '咲く',
      hiragana: 'さく',
      english: 'to bloom',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '助かる',
      hiragana: 'たすかる',
      english: 'to be saved',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '頼む',
      hiragana: 'たのむ',
      english: 'to ask a favor',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: 'つく',
      hiragana: 'つく',
      english: 'something turns on',
      genki: 18
    },
    {
      type: WordType.UVerb,
      kanji: '汚す',
      hiragana: 'よごす',
      english: 'to make dirty',
      genki: 18
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '落ちる',
      hiragana: 'おちる',
      english: 'something drops',
      genki: 18
    },
    {
      type: WordType.RuVerb,
      kanji: '片付ける',
      hiragana: 'かたづける',
      english: 'to tidy up',
      genki: 18
    },
    {
      type: WordType.RuVerb,
      kanji: '考える',
      hiragana: 'かんがえる',
      english: 'to think about',
      genki: 18
    },
    {
      type: WordType.RuVerb,
      kanji: '消える',
      hiragana: 'きえる',
      english: 'something goes off',
      genki: 18
    },
    {
      type: WordType.RuVerb,
      kanji: '壊れる',
      hiragana: 'こわれる',
      english: 'something breaks',
      genki: 18
    },
    {
      type: WordType.RuVerb,
      kanji: '汚れる',
      hiragana: 'よごれる',
      english: 'to become dirty',
      genki: 18
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '注文する',
      hiragana: 'ちゅうもんする',
      english: 'to place an order',
      genki: 18
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '明るい',
      hiragana: 'あかるい',
      english: 'bright',
      genki: 18
    },
    {
      type: WordType.IAdj,
      kanji: '暗い',
      hiragana: 'くらい',
      english: 'dark',
      genki: 18
    },
    {
      type: WordType.IAdj,
      kanji: '恥ずかしい',
      hiragana: 'はずかしい',
      english: 'embarrassing',
      genki: 18
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '大切',
      hiragana: 'たいせつ',
      english: 'important',
      genki: 18
    },
    {
      type: WordType.NaAdj,
      kanji: '不安',
      hiragana: 'ふあん',
      english: 'anxious',
      genki: 18
    },
    {
      type: WordType.NaAdj,
      kanji: '無理',
      hiragana: 'むり',
      english: 'impossible',
      genki: 18
    },
  ],
  [WordType.IrregularAdj]: [],
}; 