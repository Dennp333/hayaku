import { RefObject } from 'react';
import { Problem } from '../types/Problem';

interface GameplayProps {
  problem: Problem;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  showMistake?: boolean;
  displayText: '漢字' | 'ひらがな';
}

export default function Gameplay({
  problem,
  userAnswer,
  setUserAnswer,
  onKeyDown,
  inputRef,
  showMistake,
  displayText
}: GameplayProps) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4 font-mono">
        {displayText === '漢字' ? problem.word.kanji : problem.word.hiragana}
        <div className="text-lg text-gray-600">{problem.form}</div>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={onKeyDown}
        className={`text-4xl w-64 p-1 border text-center ${showMistake ? 'shake' : ''}`}
        autoFocus
      />
    </div>
  );
} 