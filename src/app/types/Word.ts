import { WordType } from './constants';

export interface Word {
  type: WordType;
  kanji: string;
  english: string;
  genki: number;
  jlpt: number;
} 