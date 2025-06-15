import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

export const l9Vocab: Record<WordType, Word[]> = {
  [WordType.UVerb]: [
    {
      type: WordType.UVerb,
      kanji: '踊る',
      hiragana: 'おどる',
      english: 'to dance',
      genki: 9
    },
    {
      type: WordType.UVerb,
      kanji: '終わる',
      hiragana: 'おわる',
      english: '(something) ends',
      genki: 9
    },
    {
      type: WordType.UVerb,
      kanji: '薬を飲む',
      hiragana: 'くすりをのむ',
      english: 'to take medicine',
      genki: 9
    },
    {
      type: WordType.UVerb,
      kanji: '人気がある',
      hiragana: 'にんきがある',
      english: 'to be popular',
      genki: 9
    },
    {
      type: WordType.UVerb,
      kanji: '弾く',
      hiragana: 'ひく',
      english: 'to play (string instrument)',
      genki: 9
    },
    {
      type: WordType.UVerb,
      kanji: 'もらう',
      hiragana: 'もらう',
      english: 'to get',
      genki: 9
    },
  ],
  [WordType.RuVerb]: [
    {
      type: WordType.RuVerb,
      kanji: '覚える',
      hiragana: 'おぼえる',
      english: 'to memorize',
      genki: 9
    },
    {
      type: WordType.RuVerb,
      kanji: '出る',
      hiragana: 'でる',
      english: 'to exit',
      genki: 9
    },
  ],
  [WordType.SuruVerb]: [
    {
      type: WordType.SuruVerb,
      kanji: '運動する',
      hiragana: 'うんどうする',
      english: 'to exercise',
      genki: 9
    },
    {
      type: WordType.SuruVerb,
      kanji: '散歩する',
      hiragana: 'さんぽする',
      english: 'to take a walk',
      genki: 9
    },
  ],
  [WordType.KuruVerb]: [],
  [WordType.IAdj]: [
    {
      type: WordType.IAdj,
      kanji: '青い',
      hiragana: 'あおい',
      english: 'blue',
      genki: 9
    },
    {
      type: WordType.IAdj,
      kanji: '赤い',
      hiragana: 'あかい',
      english: 'red',
      genki: 9
    },
    {
      type: WordType.IAdj,
      kanji: '黒い',
      hiragana: 'くろい',
      english: 'black',
      genki: 9
    },
    {
      type: WordType.IAdj,
      kanji: '白い',
      hiragana: 'しろい',
      english: 'white',
      genki: 9
    },
    {
      type: WordType.IAdj,
      kanji: '寂しい',
      hiragana: 'さびしい',
      english: 'lonely',
      genki: 9
    },
    {
      type: WordType.IAdj,
      kanji: '若い',
      hiragana: 'わかい',
      english: 'young',
      genki: 9
    },
  ],
  [WordType.NaAdj]: [
    {
      type: WordType.NaAdj,
      kanji: '意地悪',
      hiragana: 'いじわる',
      english: 'mean-spirited',
      genki: 9
    },
  ],
  [WordType.IrregularAdj]: [],
}; 