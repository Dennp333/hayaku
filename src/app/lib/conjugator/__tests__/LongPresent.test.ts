import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.LongPresent;

describe('LongPresent Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行きます',
      hiragana: 'いきます'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べます',
      hiragana: 'たべます'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'します',
      hiragana: 'します'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来ます',
      hiragana: 'きます'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってきます',
      hiragana: 'もってきます'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早いです',
      hiragana: 'はやいです'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きです',
      hiragana: 'すきです'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'いいです',
      hiragana: 'いいです'
    });
  });
}); 