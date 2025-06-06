import { WordType } from './constants';

export interface Word {
  type: WordType;
  kanji: string;
  hiragana: string;
  english: string;
  genki: number;
} 