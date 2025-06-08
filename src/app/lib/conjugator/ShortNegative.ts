import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class ShortNegative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.kanji.endsWith('がある') || word.kanji === 'ある') {
      return {
        kanji: word.kanji.slice(0, -2) + "ない",
        hiragana: word.hiragana.slice(0, -2) + "ない"
      };
    } else if (word.kanji.endsWith('う')) {
      return {
        kanji: word.kanji.slice(0, -1) + "わない",
        hiragana: word.hiragana.slice(0, -1) + "わない"
      };
    } else {
      return {
        kanji: this.shiftLastChar(word.kanji, 'あ') + "ない",
        hiragana: this.shiftLastChar(word.hiragana, 'あ') + "ない"
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "ない",
      hiragana: word.hiragana.slice(0, -1) + "ない"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しない",
      hiragana: word.hiragana.slice(0, -2) + "しない"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "こない" : "来ない",
      hiragana: word.hiragana.slice(0, -2) + "こない"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "くない",
      hiragana: word.hiragana.slice(0, -1) + "くない"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "じゃない",
      hiragana: word.hiragana + "じゃない"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よくない",
      hiragana: word.hiragana.slice(0, -2) + "よくない"
    };
  }
} 