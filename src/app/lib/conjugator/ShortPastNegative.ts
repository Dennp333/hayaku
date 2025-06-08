import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class ShortPastNegative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('がある') || word.kanji === 'ある') {
      return {
        kanji: word.kanji.slice(0, -2) + "なかった",
        hiragana: word.hiragana.slice(0, -2) + "なかった"
      };
    } else if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "わなかった",
        hiragana: word.hiragana.slice(0, -1) + "わなかった"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "なかった",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "なかった"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "なかった",
      hiragana: word.hiragana.slice(0, -1) + "なかった"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しなかった",
      hiragana: word.hiragana.slice(0, -2) + "しなかった"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こなかった" : "来なかった",
      hiragana: word.hiragana.slice(0, -2) + "こなかった"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "くなかった",
      hiragana: word.hiragana.slice(0, -1) + "くなかった"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "じゃなかった",
      hiragana: word.hiragana + "じゃなかった"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よくなかった",
      hiragana: word.hiragana.slice(0, -2) + "よくなかった"
    };
  }
} 