import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Passive extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "われる",
        hiragana: word.hiragana.slice(0, -1) + "われる"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "れる",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "れる"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "られる",
      hiragana: word.hiragana.slice(0, -1) + "られる"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "される",
      hiragana: word.hiragana.slice(0, -2) + "される"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こられる" : "来られる",
      hiragana: word.hiragana.slice(0, -2) + "こられる"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Passive form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Passive form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Passive form is unavailable for adjectives');
  }
} 