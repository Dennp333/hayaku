import { Word } from '../../types/Word';
import { Form } from '../../types/constants';

interface ConjugationResult {
  kanji: string;
  hiragana: string;
}

export function conjugate(word: Word, form: Form): ConjugationResult {
  switch (form) {
    case Form.LongPresent:
      return {
        kanji: word.kanji,
        hiragana: word.hiragana
      };
    case Form.LongPast:
      return {
        kanji: word.kanji,
        hiragana: word.hiragana
      };
    case Form.LongNegative:
      return {
        kanji: word.kanji,
        hiragana: word.hiragana
      };
    case Form.LongPastNegative:
      return {
        kanji: word.kanji,
        hiragana: word.hiragana
      };
  }
} 