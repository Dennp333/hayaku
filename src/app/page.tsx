'use client';

import { useState, useEffect, useRef } from "react";

interface Problem {
  num1: number;
  num2: number;
  operation: string;
  answer: number;
}

export default function Home() {
  const [operation, setOperation] = useState<'addition' | 'subtraction' | 'multiplication' | 'division'>('addition');
  const [duration, setDuration] = useState(120); // 2 minutes default
  const [range1Start, setRange1Start] = useState(0);
  const [range1End, setRange1End] = useState(12);
  const [range2Start, setRange2Start] = useState(0);
  const [range2End, setRange2End] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Game state
  const [timeLeft, setTimeLeft] = useState(duration);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [gameHistory, setGameHistory] = useState<{problem: Problem, userAnswer: string, correct: boolean}[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const generateNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateProblem = () => {
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
    <div className="min-h-screen p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Arithmetic Game</h1>
        
        {!isPlaying ? (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Operation</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {['addition', 'subtraction', 'multiplication', 'division'].map((op) => (
                  <button
                    key={op}
                    onClick={() => setOperation(op as any)}
                    className={`p-3 rounded-lg ${
                      operation === op
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {op.charAt(0).toUpperCase() + op.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Range</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Number</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      value={range1Start}
                      onChange={(e) => setRange1Start(parseInt(e.target.value))}
                      className="w-20 p-2 border rounded"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={range1End}
                      onChange={(e) => setRange1End(parseInt(e.target.value))}
                      className="w-20 p-2 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Second Number</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      value={range2Start}
                      onChange={(e) => setRange2Start(parseInt(e.target.value))}
                      className="w-20 p-2 border rounded"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={range2End}
                      onChange={(e) => setRange2End(parseInt(e.target.value))}
                      className="w-20 p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Duration</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {[30, 60, 120, 300, 600].map((seconds) => (
                  <button
                    key={seconds}
                    onClick={() => setDuration(seconds)}
                    className={`p-3 rounded-lg ${
                      duration === seconds
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {seconds} sec
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold text-lg"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">Score: {score}</div>
              <div className="text-2xl font-bold">Time: {timeLeft}s</div>
            </div>

            {currentProblem && (
              <div className="text-center space-y-6">
                <div className="text-4xl font-mono">
                  {currentProblem.num1} {getOperationSymbol(currentProblem.operation)} {currentProblem.num2} =
                </div>
                <input
                  ref={inputRef}
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-4xl w-40 p-2 border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"
                  autoFocus
                />
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={endGame}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                End Game
              </button>
            </div>

            {gameHistory.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Recent Problems</h3>
                <div className="space-y-2">
                  {gameHistory.slice(-5).reverse().map((entry, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded ${
                        entry.correct ? 'bg-green-100' : 'bg-red-100'
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
