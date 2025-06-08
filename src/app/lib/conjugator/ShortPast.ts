import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class ShortPast extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.hiragana.endsWith('いく')) {
      return {
        kanji: word.kanji.slice(0, -1) + "った",
        hiragana: word.hiragana.slice(0, -1) + "った"
      };
    } else {
      const suffix = taShifts[word.kanji[word.kanji.length - 1]];
      return {
        kanji: word.kanji.slice(0, -1) + suffix,
        hiragana: word.hiragana.slice(0, -1) + suffix
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "た",
      hiragana: word.hiragana.slice(0, -1) + "た"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "した",
      hiragana: word.hiragana.slice(0, -2) + "した"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きた" : "来た",
      hiragana: word.hiragana.slice(0, -2) + "きた"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "かった",
      hiragana: word.hiragana.slice(0, -1) + "かった"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "だった",
      hiragana: word.hiragana + "だった"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よかった",
      hiragana: word.hiragana.slice(0, -2) + "よかった"
    };
  }
}

const taShifts: Record<string, string> = {
  'く': 'いた',
  'ぐ': 'いだ',
  'す': 'した',
  'つ': 'った',
  'ぬ': 'んだ',
  'ぶ': 'んだ',
  'む': 'んだ',
  'る': 'った',
  'う': 'った',
}; 