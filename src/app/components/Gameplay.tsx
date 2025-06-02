import { RefObject } from 'react';
import { Problem } from '../types/Problem';

interface GameplayProps {
  problem: Problem;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

export default function Gameplay({
  problem,
  userAnswer,
  setUserAnswer,
  onKeyDown,
  inputRef
}: GameplayProps) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4 font-mono">
        {problem.word.kanji}
        <div className="text-lg text-gray-600">{problem.form}</div>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={onKeyDown}
        className="text-4xl w-64 p-1 border text-center"
        autoFocus
      />
    </div>
  );
} 