'use client';

import { useState, useEffect, useRef } from "react";
import Menu from "./components/Menu";
import Gameplay from "./components/Gameplay";
import EndGame from "./components/EndGame";
import { Word } from "./types/Word";
import { getVocabulary } from "./lib/vocabulary";
import { conjugate } from "./lib/conjugator/conjugate";
import { Form } from "./types/constants";
import { Problem } from "./types/Problem";

type GameState = 'start' | 'playing' | 'end';

export default function Home() {
  // Settings
  const [genkiLessons, setGenkiLessons] = useState<Set<number>>(new Set());
  const [wordTypes, setWordTypes] = useState<Set<string>>(new Set());
  const [forms, setForms] = useState<Set<Form>>(new Set());
  const words = useRef<Array<Word>>([]);
  const [duration, setDuration] = useState(120); // 2 minutes default
  const [gameState, setGameState] = useState<GameState>('start');
  const [displayText, setDisplayText] = useState<'漢字' | 'ひらがな'>('ひらがな');
  const [showEnglishHints, setShowEnglishHints] = useState(false);
  
  // Game state
  const [timeLeft, setTimeLeft] = useState(duration);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showMistake, setShowMistake] = useState(false);
  const mistakes = useRef<Array<Problem>>([]);
  const addedToMistakes = useRef(false);

  const generateProblem = () => {
    const word = words.current[Math.floor(Math.random() * words.current.length)];
    const formsArray = Array.from(forms);
    const form = formsArray[Math.floor(Math.random() * formsArray.length)];
    const answer = conjugate(word, form);

    return {
      word: word,
      form: form,
      answerKanji: answer.kanji,
      answerKana: answer.hiragana
    };
  };

  const startGame = () => {
    setTimeLeft(duration);
    setScore(0);
    mistakes.current = [];
    addedToMistakes.current = false;
    words.current = getVocabulary();
    if (words.current.length > 0) {
      setCurrentProblem(generateProblem());
      setGameState('playing');
    }
  };

  const endGame = () => {
    setGameState('end');
    setCurrentProblem(null);
  };

  const returnToMenu = () => {
    setGameState('start');
  };

  const checkAnswer = (answer: string) => {
    if (!currentProblem) return;
    const isCorrect = answer === currentProblem.answerKanji || answer === currentProblem.answerKana;
    if (isCorrect) {
      setScore(prev => prev + 1);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      addedToMistakes.current = false;
      setCurrentProblem(generateProblem());
    } else {
      if (!addedToMistakes.current) {
        mistakes.current.push(currentProblem);
        addedToMistakes.current = true;
      }
      // Trigger shake animation
      setShowMistake(true);
      setTimeout(() => setShowMistake(false), 200);
    }
  };

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && inputRef.current) {
      checkAnswer(inputRef.current.value);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
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
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState, currentProblem]);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {gameState === 'start' && (
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
        )}
        {gameState === 'playing' && (
          <div className="space-y-4">
            <div className="flex justify-between text-xl">
              <div className="p-4">Time left: {timeLeft}</div>
              <div className="p-4">Score: {score}</div>
            </div>

            {currentProblem && (
              <Gameplay
                problem={currentProblem}
                onSubmit={handleSubmit}
                inputRef={inputRef}
                showMistake={showMistake}
                displayText={displayText}
                showEnglishHint={showEnglishHints}
              />
            )}

            <div className="flex justify-end">
              <button
                onClick={endGame}
                className="px-4 py-1 border border-gray-300 hover:bg-gray-50"
              >
                End Game
              </button>
            </div>
          </div>
        )}
        {gameState === 'end' && (
          <EndGame
            score={score}
            onRestart={startGame}
            onReturnToMenu={returnToMenu}
            mistakes={mistakes.current}
            displayText={displayText}
            showEnglishHint={showEnglishHints}
          />
        )}
      </main>
    </div>
  );
}
