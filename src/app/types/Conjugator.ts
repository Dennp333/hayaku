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
} 