import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l19Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '怒る',
      hiragana: 'おこる',
      english: 'to get angry',
      genki: 19
    },
    {
      type: WordType.UVerb,
      kanji: '決まる',
      hiragana: 'きまる',
      english: 'to be decided',
      genki: 19
    },
    {
      type: WordType.UVerb,
      kanji: '知り合う',
      hiragana: 'しりあう',
      english: 'to get acquainted with',
      genki: 19
    },
    {
      type: WordType.UVerb,
      kanji: '呼ぶ',
      hiragana: 'よぶ',
      english: 'to call',
      genki: 19
    },
    {
      type: WordType.UVerb,
      kanji: '引っ越す',
      hiragana: 'ひっこす',
      english: 'to move',
      genki: 19
    },
    {
      type: WordType.UVerb,
      kanji: '寄る',
      hiragana: 'よる',
      english: 'to stop by',
      genki: 19
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '遅れる',
      hiragana: 'おくれる',
      english: 'to be late',
      genki: 19
    },
    {
      type: WordType.RuVerb,
      kanji: 'かける',
      hiragana: 'かける',
      english: 'to sit down',
      genki: 19
    },
    {
      type: WordType.RuVerb,
      kanji: 'もてる',
      hiragana: 'もてる',
      english: 'to be popular',
      genki: 19
    },
    {
      type: WordType.RuVerb,
      kanji: '晴れる',
      hiragana: 'はれる',
      english: 'to become sunny',
      genki: 19
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: 'ごちそうする',
      hiragana: 'ごちそうする',
      english: 'to treat someone to a meal',
      genki: 19
    },
    {
      type: WordType.SuruVerb,
      kanji: '遠慮する',
      hiragana: 'えんりょする',
      english: 'to refrain from',
      genki: 19
    },
    {
      type: WordType.SuruVerb,
      kanji: '招待する',
      hiragana: 'しょうたいする',
      english: 'to invite someone',
      genki: 19
    },
    {
      type: WordType.SuruVerb,
      kanji: '話をする',
      hiragana: 'はなしをする',
      english: 'to have a talk',
      genki: 19
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [],
  [WordType.NaAdj]: [],
  [WordType.IrregularAdj]: [
    {
      type: WordType.IrregularAdj,
      kanji: '仲がいい',
      hiragana: 'なかがいい',
      english: 'friendly',
      genki: 19
    },
  ],
}; 