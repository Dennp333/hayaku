import { Form } from '../../../types/constants';
import { conjugate } from '../conjugate';
import { TEST_VOCAB } from './testVocab';

const form: Form = Form.NegativeBa;

describe('NegativeBa Conjugation', () => {
  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['行く'], form);
    expect(result).toEqual({
      kanji: '行かなければ',
      hiragana: 'いかなければ'
    });
  });

  test('Ru-verb', () => {
    const result = conjugate(TEST_VOCAB['食べる'], form);
    expect(result).toEqual({
      kanji: '食べなければ',
      hiragana: 'たべなければ'
    });
  });

  test('Suru-verb', () => {
    const result = conjugate(TEST_VOCAB['する'], form);
    expect(result).toEqual({
      kanji: 'しなければ',
      hiragana: 'しなければ'
    });
  });

  test('Kuru', () => {
    const result = conjugate(TEST_VOCAB['来る'], form);
    expect(result).toEqual({
      kanji: '来なければ',
      hiragana: 'こなければ'
    });
  });

  test('Kuru-verb', () => {
    const result = conjugate(TEST_VOCAB['持ってくる'], form);
    expect(result).toEqual({
      kanji: '持ってこなければ',
      hiragana: 'もってこなければ'
    });
  });

  test('U-verb', () => {
    const result = conjugate(TEST_VOCAB['買う'], form);
    expect(result).toEqual({
      kanji: '買わなければ',
      hiragana: 'かわなければ'
    });
  });

  test('ある', () => {
    const result = conjugate(TEST_VOCAB['ある'], form);
    expect(result).toEqual({
      kanji: 'なければ',
      hiragana: 'なければ'
    });
  });
}); 