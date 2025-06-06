import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.LongNegative;

describe('LongNegative Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行きません',
      hiragana: 'いきません'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べません',
      hiragana: 'たべません'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'しません',
      hiragana: 'しません'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来ません',
      hiragana: 'きません'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってきません',
      hiragana: 'もってきません'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早くないです',
      hiragana: 'はやくないです'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きじゃないです',
      hiragana: 'すきじゃないです'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'よくないです',
      hiragana: 'よくないです'
    });
  });
}); 