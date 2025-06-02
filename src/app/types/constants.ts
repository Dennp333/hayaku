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
  LongPastNegative = 'long-past-negative'
}

export const WORD_TYPES = Object.values(WordType);
export const FORMS = Object.values(Form); 