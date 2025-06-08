import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.ShortNegative;

describe('ShortNegative Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行かない',
      hiragana: 'いかない'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べない',
      hiragana: 'たべない'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'しない',
      hiragana: 'しない'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来ない',
      hiragana: 'こない'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこない',
      hiragana: 'もってこない'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早くない',
      hiragana: 'はやくない'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きじゃない',
      hiragana: 'すきじゃない'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'よくない',
      hiragana: 'よくない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買わない',
      hiragana: 'かわない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['待つ'], form);
    expect(result).toEqual({
      kanji: '待たない',
      hiragana: 'またない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['取る'], form);
    expect(result).toEqual({
      kanji: '取らない',
      hiragana: 'とらない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['読む'], form);
    expect(result).toEqual({
      kanji: '読まない',
      hiragana: 'よまない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['遊ぶ'], form);
    expect(result).toEqual({
      kanji: '遊ばない',
      hiragana: 'あそばない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['死ぬ'], form);
    expect(result).toEqual({
      kanji: '死なない',
      hiragana: 'しなない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['急ぐ'], form);
    expect(result).toEqual({
      kanji: '急がない',
      hiragana: 'いそがない'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['話す'], form);
    expect(result).toEqual({
      kanji: '話さない',
      hiragana: 'はなさない'
    });
  });

  test('ある', () => {
    const result = conjugate(TEST_VOCAB['ある'], form);
    expect(result).toEqual({
      kanji: 'ない',
      hiragana: 'ない'
    });
  });
}); 