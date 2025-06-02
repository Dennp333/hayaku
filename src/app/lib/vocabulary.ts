import { Word } from '../types/Word';
import { WordType } from '../types/constants';

export function getVocabulary(): Word[] {
  return [
    {
      type: WordType.RuVerb,
      kanji: '食べる',
      english: 'to eat',
      genki: 3,
      jlpt: 5
    }
  ];
} 