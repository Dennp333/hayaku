import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.Potential;

describe('Potential Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行ける',
      hiragana: 'いける'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べられる',
      hiragana: 'たべられる'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'できる',
      hiragana: 'できる'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来られる',
      hiragana: 'こられる'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこられる',
      hiragana: 'もってこられる'
    });
  });
}); 