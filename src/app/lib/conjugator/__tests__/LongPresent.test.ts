import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

describe('LongPresent Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '行きます',
      hiragana: 'いきます'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '食べます',
      hiragana: 'たべます'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], Form.LongPresent);
    expect(result).toEqual({
      kanji: 'します',
      hiragana: 'します'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '来ます',
      hiragana: 'きます'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '持ってきます',
      hiragana: 'もってきます'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '早いです',
      hiragana: 'はやいです'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], Form.LongPresent);
    expect(result).toEqual({
      kanji: '好きです',
      hiragana: 'すきです'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], Form.LongPresent);
    expect(result).toEqual({
      kanji: 'いいです',
      hiragana: 'いいです'
    });
  });
}); 