import { Word } from '../../types/Word';
import { Form } from '../../types/constants';
import { ConjugationResult } from '../../types/ConjugationResult';

import { LongPresent } from './LongPresent';
import { LongPast } from './LongPast';
import { LongNegative } from './LongNegative';
import { LongPastNegative } from './LongPastNegative';
import { ShortPresent } from './ShortPresent';
import { ShortPast } from './ShortPast';
import { ShortNegative } from './ShortNegative';
import { ShortPastNegative } from './ShortPastNegative';
import { Te } from './Te';
import { Potential } from './Potential';
import { Volitional } from './Volitional';
import { Ba } from './Ba';
import { NegativeBa } from './NegativeBa';
import { Passive } from './Passive';
import { Causative } from './Causative';

// Initialize conjugator instances
const longPresent = new LongPresent();
const longPast = new LongPast();
const longNegative = new LongNegative();
const longPastNegative = new LongPastNegative();
const shortPresent = new ShortPresent();
const shortPast = new ShortPast();
const shortNegative = new ShortNegative();
const shortPastNegative = new ShortPastNegative();
const te = new Te();
const potential = new Potential();
const volitional = new Volitional();
const ba = new Ba();
const negativeBa = new NegativeBa();
const passive = new Passive();
const causative = new Causative();

export function conjugate(word: Word, form: Form): ConjugationResult {
  switch (form) {
    case Form.LongPresent:
      return longPresent.conjugate(word);
    case Form.LongPast:
      return longPast.conjugate(word);
    case Form.LongNegative:
      return longNegative.conjugate(word);
    case Form.LongPastNegative:
      return longPastNegative.conjugate(word);
    case Form.ShortPresent:
      return shortPresent.conjugate(word);
    case Form.ShortPast:
      return shortPast.conjugate(word);
    case Form.ShortNegative:
      return shortNegative.conjugate(word);
    case Form.ShortPastNegative:
      return shortPastNegative.conjugate(word);
    case Form.Te:
      return te.conjugate(word);
    case Form.Potential:
      return potential.conjugate(word);
    case Form.Volitional:
      return volitional.conjugate(word);
    case Form.Ba:
      return ba.conjugate(word);
    case Form.NegativeBa:
      return negativeBa.conjugate(word);
    case Form.Passive:
      return passive.conjugate(word);
    case Form.Causative:
      return causative.conjugate(word);
    default:
      throw new Error(`Invalid form: ${form}`);
  }
} 