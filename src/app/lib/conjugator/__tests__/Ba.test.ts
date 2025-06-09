import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.Ba;

describe('Ba Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行けば',
      hiragana: 'いけば'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べれば',
      hiragana: 'たべれば'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'すれば',
      hiragana: 'すれば'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来れば',
      hiragana: 'くれば'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってくれば',
      hiragana: 'もってくれば'
    });
  });
}); 