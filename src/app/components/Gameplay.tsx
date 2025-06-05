import { RefObject, useEffect } from 'react';
import { Problem } from '../types/Problem';
import { bind } from 'wanakana';

interface GameplayProps {
  problem: Problem;
  onSubmit: (e: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  showMistake?: boolean;
  displayText: '漢字' | 'ひらがな';
  showEnglishHint: boolean;
  showHint: boolean;
  setShowHint: (value: boolean) => void;
}

export default function Gameplay({
  problem,
  onSubmit,
  inputRef,
  showMistake,
  displayText,
  showEnglishHint,
  showHint,
  setShowHint
}: GameplayProps) {

  useEffect(() => {
    if (inputRef.current) {
      bind(inputRef.current, { IMEMode: 'toHiragana' });
    }
  }, [inputRef]);

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
              → <span className="font-bold">{problem.answerKanji}</span>
              {problem.answerKanji !== problem.answerKana && (
                <> <span className="font-normal">or</span> <span className="font-bold">{problem.answerKana}</span></>
              )}
            </span>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="text"
        className={`text-4xl w-64 p-1 border text-center ${showMistake ? 'shake' : ''}`}
        onKeyDown={onSubmit}
        autoFocus
      />
    </div>
  );
} 