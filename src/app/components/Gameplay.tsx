import { RefObject, useState } from 'react';
import { Problem } from '../types/Problem';

interface GameplayProps {
  problem: Problem;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  showMistake?: boolean;
  displayText: '漢字' | 'ひらがな';
  showEnglishHint: boolean;
}

export default function Gameplay({
  problem,
  userAnswer,
  setUserAnswer,
  onKeyDown,
  inputRef,
  showMistake,
  displayText,
  showEnglishHint
}: GameplayProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="text-center">
      <div className="text-4xl mb-4 font-mono">
        {displayText === '漢字' ? problem.word.kanji : problem.word.hiragana} {showEnglishHint && `(${problem.word.english})`}
        <div className="text-lg text-gray-600 flex items-center justify-center gap-2">
          {problem.form}
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 text-sm"
          >
            ?
          </button>
          {showHint && (
            <span className="text-gray-800">
              → <span className="font-bold">{problem.answerKanji}</span> <span className="font-normal">or</span> <span className="font-bold">{problem.answerKana}</span>
            </span>
          )}
        </div>
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