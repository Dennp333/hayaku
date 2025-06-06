import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class LongPast extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'い') + "ました",
      hiragana: this.shiftLastChar(word.hiragana, 'い') + "ました"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "ました",
      hiragana: word.hiragana.slice(0, -1) + "ました"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しました",
      hiragana: word.hiragana.slice(0, -2) + "しました"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きました" : "来ました",
      hiragana: word.hiragana.slice(0, -2) + "きました"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "かったです",
      hiragana: word.hiragana.slice(0, -1) + "かったです"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "でした",
      hiragana: word.hiragana + "でした"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よかったです",
      hiragana: word.hiragana.slice(0, -2) + "よかったです"
    };
  }
}