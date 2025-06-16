import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l16Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '起こす',
      hiragana: 'おこす',
      english: 'to wake someone up',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: 'おごる',
      hiragana: 'おごる',
      english: 'to treat',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '笑う',
      hiragana: 'わらう',
      english: 'to laugh',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '落ち込む',
      hiragana: 'おちこむ',
      english: 'to get depressed',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '困る',
      hiragana: 'こまる',
      english: 'to have difficulty',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '出す',
      hiragana: 'だす',
      english: 'to take out',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '直す',
      hiragana: 'なおす',
      english: 'to fix',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '見つかる',
      hiragana: 'みつかる',
      english: 'to be found',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '訳す',
      hiragana: 'やくす',
      english: 'to translate',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '貸す',
      hiragana: 'かす',
      english: 'to lend',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '連れていく',
      hiragana: 'つれていく',
      english: 'to take someone to...',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '道に迷う',
      hiragana: 'みちにまよう',
      english: 'to become lost',
      genki: 16
    },
    {
      type: WordType.UVerb,
      kanji: '迎えに行く',
      hiragana: 'むかえにいく',
      english: 'to go to pick up',
      genki: 16
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '集める',
      hiragana: 'あつめる',
      english: 'to collect',
      genki: 16
    },
    {
      type: WordType.RuVerb,
      kanji: '入れる',
      hiragana: 'いれる',
      english: 'to put in',
      genki: 16
    },
    {
      type: WordType.RuVerb,
      kanji: '見せる',
      hiragana: 'みせる',
      english: 'to show',
      genki: 16
    },
    {
      type: WordType.RuVerb,
      kanji: '乗り遅れる',
      hiragana: 'のりおくれる',
      english: 'to miss a ride',
      genki: 16
    },
    {
      type: WordType.RuVerb,
      kanji: 'アイロンをかける',
      hiragana: 'あいろんをかける',
      english: 'to iron',
      genki: 16
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '朝寝坊する',
      hiragana: 'あさねぼうする',
      english: 'to oversleep',
      genki: 16
    },
    {
      type: WordType.SuruVerb,
      kanji: '案内する',
      hiragana: 'あんないする',
      english: 'to show around',
      genki: 16
    },
    {
      type: WordType.SuruVerb,
      kanji: '説明する',
      hiragana: 'せつめいする',
      english: 'to explain',
      genki: 16
    },
  ],
  [WordType.KuruVerb]: [
    {
      type: WordType.KuruVerb,
      kanji: '迎えにくる',
      hiragana: 'むかえにくる',
      english: 'to come to pick up',
      genki: 16
    },
  ],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '汚い',
      hiragana: 'きたない',
      english: 'dirty',
      genki: 16
    },
  ],
  [WordType.NaAdj]: [],
  [WordType.IrregularAdj]: [],
}; 