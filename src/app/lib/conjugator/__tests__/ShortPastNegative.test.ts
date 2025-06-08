import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.ShortPastNegative;

describe('ShortPastNegative Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行かなかった',
      hiragana: 'いかなかった'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べなかった',
      hiragana: 'たべなかった'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'しなかった',
      hiragana: 'しなかった'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来なかった',
      hiragana: 'こなかった'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこなかった',
      hiragana: 'もってこなかった'
    });
  });

  test('I-adjective', () => {
    const result = conjugate(TEST_VOCAB['早い'], form);
    expect(result).toEqual({
      kanji: '早くなかった',
      hiragana: 'はやくなかった'
    });
  });

  test('Na-adjective', () => {
    const result = conjugate(TEST_VOCAB['好き'], form);
    expect(result).toEqual({
      kanji: '好きじゃなかった',
      hiragana: 'すきじゃなかった'
    });
  });

  test('Irregular adjective', () => {
    const result = conjugate(TEST_VOCAB['いい'], form);
    expect(result).toEqual({
      kanji: 'よくなかった',
      hiragana: 'よくなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買わなかった',
      hiragana: 'かわなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['待つ'], form);
    expect(result).toEqual({
      kanji: '待たなかった',
      hiragana: 'またなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['取る'], form);
    expect(result).toEqual({
      kanji: '取らなかった',
      hiragana: 'とらなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['読む'], form);
    expect(result).toEqual({
      kanji: '読まなかった',
      hiragana: 'よまなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['遊ぶ'], form);
    expect(result).toEqual({
      kanji: '遊ばなかった',
      hiragana: 'あそばなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['死ぬ'], form);
    expect(result).toEqual({
      kanji: '死ななかった',
      hiragana: 'しななかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['急ぐ'], form);
    expect(result).toEqual({
      kanji: '急がなかった',
      hiragana: 'いそがなかった'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['話す'], form);
    expect(result).toEqual({
      kanji: '話さなかった',
      hiragana: 'はなさなかった'
    });
  });

  test('ある', () => {
    const result = conjugate(TEST_VOCAB['ある'], form);
    expect(result).toEqual({
      kanji: 'なかった',
      hiragana: 'なかった'
    });
  });
}); 