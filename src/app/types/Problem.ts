import { Word } from './Word';
import { Form } from './constants';

export interface Problem {
  word: Word;
  form: Form;
  answer: string;
} 