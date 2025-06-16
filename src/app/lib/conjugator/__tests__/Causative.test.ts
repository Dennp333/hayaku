import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.Causative;

describe('Causative Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行かせる',
      hiragana: 'いかせる'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べさせる',
      hiragana: 'たべさせる'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'させる',
      hiragana: 'させる'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来させる',
      hiragana: 'こさせる'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこさせる',
      hiragana: 'もってこさせる'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買わせる',
      hiragana: 'かわせる'
    });
  });
}); 