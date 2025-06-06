import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class LongPastNegative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'い') + "ませんでした",
      hiragana: this.shiftLastChar(word.hiragana, 'い') + "ませんでした"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "ませんでした",
      hiragana: word.hiragana.slice(0, -1) + "ませんでした"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しませんでした",
      hiragana: word.hiragana.slice(0, -2) + "しませんでした"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きませんでした" : "来ませんでした",
      hiragana: word.hiragana.slice(0, -2) + "きませんでした"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "くなかったです",
      hiragana: word.hiragana.slice(0, -1) + "くなかったです"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "じゃなかったです",
      hiragana: word.hiragana + "じゃなかったです"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よくなかったです",
      hiragana: word.hiragana.slice(0, -2) + "よくなかったです"
    };
  }
}