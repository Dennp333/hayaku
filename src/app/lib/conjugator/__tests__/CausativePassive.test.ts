import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.CausativePassive;

describe('Causative Passive Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行かされる',
      hiragana: 'いかされる'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べさせられる',
      hiragana: 'たべさせられる'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'させられる',
      hiragana: 'させられる'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来させられる',
      hiragana: 'こさせられる'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこさせられる',
      hiragana: 'もってこさせられる'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買わされる',
      hiragana: 'かわされる'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['話す'], form);
    expect(result).toEqual({
      kanji: '話させられる',
      hiragana: 'はなさせられる'
    });
  });
}); 