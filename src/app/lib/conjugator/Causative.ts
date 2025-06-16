import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Causative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "わせる",
        hiragana: word.hiragana.slice(0, -1) + "わせる"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "せる",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "せる"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "させる",
      hiragana: word.hiragana.slice(0, -1) + "させる"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "させる",
      hiragana: word.hiragana.slice(0, -2) + "させる"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こさせる" : "来させる",
      hiragana: word.hiragana.slice(0, -2) + "こさせる"
    };
  }

  protected conjugateIAdj(_word: Word): ConjugationResult {
    throw new Error('Causative form is unavailable for adjectives');
  }

  protected conjugateNaAdj(_word: Word): ConjugationResult {
    throw new Error('Causative form is unavailable for adjectives');
  }

  protected conjugateIrregularAdj(_word: Word): ConjugationResult {
    throw new Error('Causative form is unavailable for adjectives');
  }
} 