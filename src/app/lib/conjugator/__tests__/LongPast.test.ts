import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

describe('LongPast Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], Form.LongPast);
    expect(result).toEqual({
      kanji: '行きました',
      hiragana: 'いきました'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], Form.LongPast);
    expect(result).toEqual({
      kanji: '食べました',
      hiragana: 'たべました'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], Form.LongPast);
    expect(result).toEqual({
      kanji: 'しました',
      hiragana: 'しました'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], Form.LongPast);
    expect(result).toEqual({
      kanji: '来ました',
      hiragana: 'きました'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], Form.LongPast);
    expect(result).toEqual({
      kanji: '持ってきました',
      hiragana: 'もってきました'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], Form.LongPast);
    expect(result).toEqual({
      kanji: '早かったです',
      hiragana: 'はやかったです'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], Form.LongPast);
    expect(result).toEqual({
      kanji: '好きでした',
      hiragana: 'すきでした'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], Form.LongPast);
    expect(result).toEqual({
      kanji: 'よかったです',
      hiragana: 'よかったです'
    });
  });
}); 