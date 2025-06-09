import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Volitional extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'お') + "う",
      hiragana: this.shiftLastChar(word.hiragana, 'お') + "う"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "よう",
      hiragana: word.hiragana.slice(0, -1) + "よう"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しよう",
      hiragana: word.hiragana.slice(0, -2) + "しよう"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こよう" : "来よう",
      hiragana: word.hiragana.slice(0, -2) + "こよう"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Volitional form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Volitional form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Volitional form is unavailable for adjectives');
  }
} 