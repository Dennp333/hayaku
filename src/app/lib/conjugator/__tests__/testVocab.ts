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
  }
} 