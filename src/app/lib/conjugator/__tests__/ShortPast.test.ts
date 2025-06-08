import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.ShortPast;

describe('ShortPast Conjugation', () => {
  test('行く', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行った',
      hiragana: 'いった'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べた',
      hiragana: 'たべた'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'した',
      hiragana: 'した'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来た',
      hiragana: 'きた'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってきた',
      hiragana: 'もってきた'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早かった',
      hiragana: 'はやかった'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きだった',
      hiragana: 'すきだった'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'よかった',
      hiragana: 'よかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買った',
      hiragana: 'かった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['待つ'], form);
    expect(result).toEqual({
      kanji: '待った',
      hiragana: 'まった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['取る'], form);
    expect(result).toEqual({
      kanji: '取った',
      hiragana: 'とった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['読む'], form);
    expect(result).toEqual({
      kanji: '読んだ',
      hiragana: 'よんだ'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['遊ぶ'], form);
    expect(result).toEqual({
      kanji: '遊んだ',
      hiragana: 'あそんだ'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['死ぬ'], form);
    expect(result).toEqual({
      kanji: '死んだ',
      hiragana: 'しんだ'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['書く'], form);
    expect(result).toEqual({
      kanji: '書いた',
      hiragana: 'かいた'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['急ぐ'], form);
    expect(result).toEqual({
      kanji: '急いだ',
      hiragana: 'いそいだ'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['話す'], form);
    expect(result).toEqual({
      kanji: '話した',
      hiragana: 'はなした'
    });
  });
}); 