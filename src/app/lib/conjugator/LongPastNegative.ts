import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class LongPastNegative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji,
      hiragana: word.hiragana
    };
  }
}