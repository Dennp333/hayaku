'use client';

import { useState, useEffect, useRef } from "react";
import Menu from "./components/Menu";

interface Problem {
  num1: number;
  num2: number;
  operation: string;
  answer: number;
}

export default function Home() {
  const [operations] = useState({
    addition: true,
    subtraction: true,
    multiplication: true,
    division: true
  });
  const [genkiLessons, setGenkiLessons] = useState<Set<number>>(new Set());
  const [wordTypes, setWordTypes] = useState<Set<string>>(new Set());
  const [forms, setForms] = useState<Set<string>>(new Set());
  const [duration, setDuration] = useState(120); // 2 minutes default
  const [range1Start] = useState(0);
  const [range1End] = useState(12);
  const [range2Start] = useState(0);
  const [range2End] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Game state
  const [timeLeft, setTimeLeft] = useState(duration);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [gameHistory, setGameHistory] = useState<{problem: Problem, userAnswer: string, correct: boolean}[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayText, setDisplayText] = useState<'漢字' | 'ひらがな' | 'ふりがな'>('漢字');
  const [showEnglishHints, setShowEnglishHints] = useState(false);
  
  const generateNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateProblem = () => {
    const enabledOperations = Object.entries(operations)
      .filter((entry) => entry[1])
      .map((entry) => entry[0]);
    
    if (enabledOperations.length === 0) {
      return null;
    }

    const operation = enabledOperations[Math.floor(Math.random() * enabledOperations.length)];
    
    let num1 = generateNumber(range1Start, range1End);
    let num2 = generateNumber(range2Start, range2End);
    let answer: number;
    
    switch (operation) {
      case 'addition':
        answer = num1 + num2;
        break;
      case 'subtraction':
        answer = num1 - num2;
        break;
      case 'multiplication':
        answer = num1 * num2;
        break;
      case 'division':
        // Ensure clean division
        num2 = num2 === 0 ? 1 : num2;
        num1 = num2 * generateNumber(range1Start, range1End);
        answer = num1 / num2;
        break;
      default:
        answer = 0;
    }

    return {
      num1,
      num2,
      operation,
      answer
    };
  };

  const startGame = () => {
    setIsPlaying(true);
    setTimeLeft(duration);
    setScore(0);
    setGameHistory([]);
    setCurrentProblem(generateProblem());
    setUserAnswer('');
  };

  const endGame = () => {
    setIsPlaying(false);
    setTimeLeft(duration);
    setCurrentProblem(null);
    setUserAnswer('');
  };

  const checkAnswer = () => {
    if (!currentProblem || userAnswer.trim() === '') return;

    const isCorrect = parseFloat(userAnswer) === currentProblem.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setGameHistory(prev => [...prev, {
      problem: currentProblem,
      userAnswer,
      correct: isCorrect
    }]);

    setCurrentProblem(generateProblem());
    setUserAnswer('');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (isPlaying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPlaying, currentProblem]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const getOperationSymbol = (op: string) => {
    switch (op) {
      case 'addition': return '+';
      case 'subtraction': return '-';
      case 'multiplication': return '×';
      case 'division': return '÷';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {!isPlaying ? (
          <Menu
            genkiLessons={genkiLessons}
            setGenkiLessons={setGenkiLessons}
            wordTypes={wordTypes}
            setWordTypes={setWordTypes}
            forms={forms}
            setForms={setForms}
            duration={duration}
            setDuration={setDuration}
            displayText={displayText}
            setDisplayText={setDisplayText}
            showEnglishHints={showEnglishHints}
            setShowEnglishHints={setShowEnglishHints}
            startGame={startGame}
          />
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between text-xl">
              <div>Score: {score}</div>
              <div>Time: {timeLeft}</div>
            </div>

            {currentProblem && (
              <div className="text-center">
                <div className="text-4xl mb-4 font-mono">
                  {currentProblem.num1} {getOperationSymbol(currentProblem.operation)} {currentProblem.num2} =
                </div>
                <input
                  ref={inputRef}
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-4xl w-32 p-1 border text-center"
                  autoFocus
                />
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={endGame}
                className="px-4 py-1 border border-gray-300 hover:bg-gray-50"
              >
                End Game
              </button>
            </div>

            {gameHistory.length > 0 && (
              <div className="mt-8">
                <div className="space-y-1">
                  {gameHistory.slice(-5).reverse().map((entry, idx) => (
                    <div
                      key={idx}
                      className={`${
                        entry.correct ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {entry.problem.num1} {getOperationSymbol(entry.problem.operation)} {entry.problem.num2} = {entry.userAnswer}
                      {!entry.correct && <span className="ml-2">(Correct: {entry.problem.answer})</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
