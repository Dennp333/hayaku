import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Ba extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'え') + "ば",
      hiragana: this.shiftLastChar(word.hiragana, 'え') + "ば"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'え') + "ば",
      hiragana: this.shiftLastChar(word.hiragana, 'え') + "ば"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'え') + "ば",
      hiragana: this.shiftLastChar(word.hiragana, 'え') + "ば"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'え') + "ば",
      hiragana: this.shiftLastChar(word.hiragana, 'え') + "ば"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }
} 