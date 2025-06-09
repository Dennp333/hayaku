import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Potential extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'え') + "る",
      hiragana: this.shiftLastChar(word.hiragana, 'え') + "る"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "られる",
      hiragana: word.hiragana.slice(0, -1) + "られる"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "できる",
      hiragana: word.hiragana.slice(0, -2) + "できる"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こられる" : "来られる",
      hiragana: word.hiragana.slice(0, -2) + "こられる"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    throw new Error('Potential form is unavailable for adjectives');
  }
} 