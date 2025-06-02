import { Word } from '../../types/Word';
import { Form } from '../../types/constants';

export function conjugate(word: Word, form: Form): string {
  switch (form) {
    case Form.LongPresent:
      return word.kanji;
    case Form.LongPast:
      return word.kanji;
    case Form.LongNegative:
      return word.kanji;
    case Form.LongPastNegative:
      return word.kanji;
  }
} 