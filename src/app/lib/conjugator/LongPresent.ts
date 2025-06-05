import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class LongPresent extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'い') + "ます",
      hiragana: this.shiftLastChar(word.hiragana, 'い') + "ます"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "ます",
      hiragana: word.hiragana.slice(0, -1) + "ます"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "します",
      hiragana: word.hiragana.slice(0, -2) + "します"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きます" : "来ます",
      hiragana: word.hiragana.slice(0, -2) + "きます"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "です",
      hiragana: word.hiragana + "です"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "です",
      hiragana: word.hiragana + "です"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "です",
      hiragana: word.hiragana + "です"
    };
  }
}