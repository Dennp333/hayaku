import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class CausativePassive extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "わされる",
        hiragana: word.hiragana.slice(0, -1) + "わされる"
      };
    } else if (word.kanji.endsWith('す')) {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "せられる",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "せられる"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "される",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "される"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "させられる",
      hiragana: word.hiragana.slice(0, -1) + "させられる"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "させられる",
      hiragana: word.hiragana.slice(0, -2) + "させられる"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こさせられる" : "来させられる",
      hiragana: word.hiragana.slice(0, -2) + "こさせられる"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Causative Passive form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Causative Passive form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Causative Passive form is unavailable for adjectives');
  }
} 