import { WordType } from "@/app/types/constants";
import { Word } from "../../../types/Word";

export const TEST_VOCAB: Record<string, Word> = {
  '行く': {
    type: WordType.UVerb,
    kanji: '行く',
    hiragana: 'いく',
    english: 'to go',
    genki: 3
  },
  '食べる': {
    type: WordType.RuVerb,
    kanji: '食べる',
    hiragana: 'たべる',
    english: 'to eat',
    genki: 3
  },
  'する': {
    type: WordType.SuruVerb,
    kanji: 'する',
    hiragana: 'する',
    english: 'to do',
    genki: 3
  },
  '来る': {
    type: WordType.KuruVerb,
    kanji: '来る',
    hiragana: 'くる',
    english: 'to come',
    genki: 3
  },
  '持ってくる': {
    type: WordType.KuruVerb,
    kanji: '持ってくる',
    hiragana: 'もってくる',
    english: 'to bring a thing',
    genki: 6
  },
  '早い': {
    type: WordType.IAdj,
    kanji: '早い',
    hiragana: 'はやい',
    english: 'early',
    genki: 3
  },
  '好き': {
    type: WordType.NaAdj,
    kanji: '好き',
    hiragana: 'すき',
    english: 'to like',
    genki: 5
  },
  'いい': {
    type: WordType.IrregularAdj,
    kanji: 'いい',
    hiragana: 'いい',
    english: 'good',
    genki: 3
  },
  '買う': {
    type: WordType.UVerb,
    kanji: '買う',
    hiragana: 'かう',
    english: 'to buy',
    genki: 4
  },
  '待つ': {
    type: WordType.UVerb,
    kanji: '待つ',
    hiragana: 'まつ',
    english: 'to wait',
    genki: 4
  },
  '取る': {
    type: WordType.UVerb,
    kanji: '取る',
    hiragana: 'とる',
    english: 'to take',
    genki: 4
  },
  '読む': {
    type: WordType.UVerb,
    kanji: '読む',
    hiragana: 'よむ',
    english: 'to read',
    genki: 3
  },
  '遊ぶ': {
    type: WordType.UVerb,
    kanji: '遊ぶ',
    hiragana: 'あそぶ',
    english: 'to play',
    genki: 6
  },
  '死ぬ': {
    type: WordType.UVerb,
    kanji: '死ぬ',
    hiragana: 'しぬ',
    english: 'to die',
    genki: 6
  },
  '書く': {
    type: WordType.UVerb,
    kanji: '書く',
    hiragana: 'かく',
    english: 'to write',
    genki: 4
  },
  '急ぐ': {
    type: WordType.UVerb,
    kanji: '急ぐ',
    hiragana: 'いそぐ',
    english: 'to hurry',
    genki: 6
  },
  '話す': {
    type: WordType.UVerb,
    kanji: '話す',
    hiragana: 'はなす',
    english: 'to talk',
    genki: 3
  },
  'ある': {
    type: WordType.UVerb,
    kanji: 'ある',
    hiragana: 'ある',
    english: 'there is',
    genki: 4
  },
} 