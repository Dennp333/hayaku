export enum WordType {
  UVerb = 'う-verb',
  RuVerb = 'る-verb',
  SuruVerb = 'する-verb',
  KuruVerb = 'くる-verb',
  IAdj = 'い-adjective',
  NaAdj = 'な-adjective',
  IrregularAdj = 'irregular-adjective'
}

export enum Form {
  LongPresent = 'long-present',
  LongPast = 'long-past',
  LongNegative = 'long-negative',
  LongPastNegative = 'long-past-negative',
  ShortPresent = 'short-present',
  ShortPast = 'short-past',
  ShortNegative = 'short-negative',
  ShortPastNegative = 'short-past-negative',
  Te = 'te',
  Potential = 'potential',
  Volitional = 'volitional',
  Ba = 'ba',
  NegativeBa = 'negative-ba',
  Passive = 'passive',
  Causative = 'causative',
  CausativePassive = 'causative-passive'
}

export const WORD_TYPES = Object.values(WordType);
export const FORMS = Object.values(Form);
export const ADJECTIVE_TYPES = [WordType.IAdj, WordType.NaAdj, WordType.IrregularAdj];
export const VERB_TYPES = [WordType.UVerb, WordType.RuVerb, WordType.SuruVerb, WordType.KuruVerb];
export const ADJECTIVE_FORMS = [Form.LongPresent, Form.LongPast, Form.LongNegative, Form.LongPastNegative, Form.ShortPresent, Form.ShortPast, Form.ShortNegative, Form.ShortPastNegative, Form.Te];
export const INFINITE_TIME = -1;