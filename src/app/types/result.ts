import { Form, WordType } from "./constants";
import { Problem } from "./Problem";

export interface Result {
  numGenkiLessons: number;
  maxGenkiLesson: number;
  wordTypes: Array<WordType>;
  forms: Array<Form>;
  duration: number;
  score: number;
  mistakes: Array<Problem>;
  showEnglishHints: boolean;
  displayText: '漢字' | 'ひらがな';
}