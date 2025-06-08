import { Word } from '../../types/Word';
import { ConjugationResult } from '../../types/ConjugationResult';
import { Conjugator } from '../../types/Conjugator';

export class Te extends Conjugator {
  protected conjugateUVerb(word: Word): ConjugationResult {
    if (word.hiragana.endsWith('いく')) {
      return {
        kanji: word.kanji.slice(0, -1) + "って",
        hiragana: word.hiragana.slice(0, -1) + "って"
      };
    } else {
      const suffix = teShifts[word.kanji[word.kanji.length - 1]];
      return {
        kanji: word.kanji.slice(0, -1) + suffix,
        hiragana: word.hiragana.slice(0, -1) + suffix
      };
    }
  }

  protected conjugateRuVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "て",
      hiragana: word.hiragana.slice(0, -1) + "て"
    };
  }

  protected conjugateSuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "して",
      hiragana: word.hiragana.slice(0, -2) + "して"
    };
  }

  protected conjugateKuruVerb(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.length > 2 ? word.kanji.slice(0, -2) + "きて" : "来て",
      hiragana: word.hiragana.slice(0, -2) + "きて"
    };
  }

  protected conjugateIAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -1) + "くて",
      hiragana: word.hiragana.slice(0, -1) + "くて"
    };
  }

  protected conjugateNaAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji + "で",
      hiragana: word.hiragana + "で"
    };
  }

  protected conjugateIrregularAdj(word: Word): ConjugationResult {
    return {
      kanji: word.kanji.slice(0, -2) + "よくて",
      hiragana: word.hiragana.slice(0, -2) + "よくて"
    };
  }
}

const teShifts: Record<string, string> = {
  'く': 'いて',
  'ぐ': 'いで',
  'す': 'して',
  'つ': 'って',
  'ぬ': 'んで',
  'ぶ': 'んで',
  'む': 'んで',
  'る': 'って',
  'う': 'って',
}; 