import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.Te;

describe('Te form Conjugation', () => {
  test('行く', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行って',
      hiragana: 'いって'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べて',
      hiragana: 'たべて'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'して',
      hiragana: 'して'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来て',
      hiragana: 'きて'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってきて',
      hiragana: 'もってきて'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早くて',
      hiragana: 'はやくて'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きで',
      hiragana: 'すきで'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'よくて',
      hiragana: 'よくて'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買って',
      hiragana: 'かって'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['待つ'], form);
    expect(result).toEqual({
      kanji: '待って',
      hiragana: 'まって'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['取る'], form);
    expect(result).toEqual({
      kanji: '取って',
      hiragana: 'とって'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['読む'], form);
    expect(result).toEqual({
      kanji: '読んで',
      hiragana: 'よんで'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['遊ぶ'], form);
    expect(result).toEqual({
      kanji: '遊んで',
      hiragana: 'あそんで'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['死ぬ'], form);
    expect(result).toEqual({
      kanji: '死んで',
      hiragana: 'しんで'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['書く'], form);
    expect(result).toEqual({
      kanji: '書いて',
      hiragana: 'かいて'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['急ぐ'], form);
    expect(result).toEqual({
      kanji: '急いで',
      hiragana: 'いそいで'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['話す'], form);
    expect(result).toEqual({
      kanji: '話して',
      hiragana: 'はなして'
    });
  });
}); 