import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class LongNegative extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    return {
      kanji: this.shiftLastChar(word.kanji, 'い') + "ません",
      hiragana: this.shiftLastChar(word.hiragana, 'い') + "ません"
    };
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "ません",
      hiragana: word.hiragana.slice(0, -1) + "ません"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "しません",
      hiragana: word.hiragana.slice(0, -2) + "しません"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きません" : "来ません",
      hiragana: word.hiragana.slice(0, -2) + "きません"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "くないです",
      hiragana: word.hiragana.slice(0, -1) + "くないです"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "じゃないです",
      hiragana: word.hiragana + "じゃないです"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よくないです",
      hiragana: word.hiragana.slice(0, -2) + "よくないです"
    };
  }
}