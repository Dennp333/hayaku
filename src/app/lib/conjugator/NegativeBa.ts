import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class NegativeBa extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('がある') || word.kanji === 'ある') {
      return {
        kanji: word.kanji.slice(0, -2) + "なければ",
        hiragana: word.hiragana.slice(0, -2) + "なければ"
      };
    } else if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "わなければ",
        hiragana: word.hiragana.slice(0, -1) + "わなければ"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "なければ",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "なければ"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "なければ",
      hiragana: word.hiragana.slice(0, -1) + "なければ"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しなければ",
      hiragana: word.hiragana.slice(0, -2) + "しなければ"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こなければ" : "来なければ",
      hiragana: word.hiragana.slice(0, -2) + "こなければ"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Negative Ba form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Negative Ba form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Negative Ba form is unavailable for adjectives');
  }
} 