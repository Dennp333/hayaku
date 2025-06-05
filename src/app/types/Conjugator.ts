import { Word } from './Word';
import { ConjugationResult } from './ConjugationResult';
import { WordType } from './constants';

export abstract class Conjugator {
  protected abstract conjugateUVerb(word: Word): ConjugationResult;
  protected abstract conjugateRuVerb(word: Word): ConjugationResult;
  protected abstract conjugateSuruVerb(word: Word): ConjugationResult;
  protected abstract conjugateKuruVerb(word: Word): ConjugationResult;
  protected abstract conjugateIAdj(word: Word): ConjugationResult;
  protected abstract conjugateNaAdj(word: Word): ConjugationResult;
  protected abstract conjugateIrregularAdj(word: Word): ConjugationResult;

  // This method is final (non-overridable) and provides the common implementation
  conjugate(word: Word): ConjugationResult {
    switch (word.type) {
      case WordType.UVerb:
        return this.conjugateUVerb(word);
      case WordType.RuVerb:
        return this.conjugateRuVerb(word);
      case WordType.SuruVerb:
        return this.conjugateSuruVerb(word);
      case WordType.KuruVerb:
        return this.conjugateKuruVerb(word);
      case WordType.IAdj:
        return this.conjugateIAdj(word);
      case WordType.NaAdj:
        return this.conjugateNaAdj(word);
      case WordType.IrregularAdj:
        return this.conjugateIrregularAdj(word);
      default:
        throw new Error(`Invalid word type: ${word.type}`);
    }
  }

  protected shiftLastChar(str: string, target: string): string {
    const lastChar = str[str.length - 1];
    return str.slice(0, -1) + characterShifts[lastChar][target];
  }
}

const characterShifts: Record<string, Record<string, string>> = {
  'く': {
    'あ': 'か',
    'い': 'き',
    'う': 'く',
    'え': 'け',
    'お': 'こ'
  },
  'ぐ': {
    'あ': 'が',
    'い': 'ぎ',
    'う': 'ぐ',
    'え': 'げ',
    'お': 'ご'
  },
  'す': {
    'あ': 'さ',
    'い': 'し',
    'う': 'す',
    'え': 'せ',
    'お': 'そ'
  },
  'ず': {
    'あ': 'ざ',
    'い': 'じ',
    'う': 'ず',
    'え': 'せ',
    'お': 'そ'
  },
  'つ': {
    'あ': 'た',
    'い': 'ち',
    'う': 'つ',
    'え': 'て',
    'お': 'と'
  },
  'づ': {
    'あ': 'だ',
    'い': 'ぢ',
    'う': 'づ',
    'え': 'で',
    'お': 'と'
  },
  'ぬ': {
    'あ': 'な',
    'い': 'に',
    'う': 'ぬ',
    'え': 'ね',
    'お': 'の'
  },
  'ふ': {
    'あ': 'は',
    'い': 'ひ',
    'う': 'ふ',
    'え': 'へ',
    'お': 'ほ'
  },
  'ぶ': {
    'あ': 'ば',
    'い': 'び',
    'う': 'ぶ',
    'え': 'べ',
    'お': 'ほ'
  },
  'ぷ': {
    'あ': 'ぱ',
    'い': 'ぴ',
    'う': 'ぷ',
    'え': 'ぺ',
    'お': 'ほ'
  },
  'む': {
    'あ': 'ま',
    'い': 'み',
    'う': 'む',
    'え': 'め',
    'お': 'も'
  },
  'る': {
    'あ': 'ら',
    'い': 'り',
    'う': 'る',
    'え': 'れ',
    'お': 'ろ'
  }
}; 