'use client';

import { useState, useEffect, useRef } from "react";
import Menu from "./components/Menu";
import Gameplay from "./components/Gameplay";
import { Word } from "./types/Word";
import { getVocabulary } from "./lib/vocabulary";
import { conjugate } from "./lib/conjugator/conjugate";
import { Form } from "./types/constants";
import { Problem } from "./types/Problem";

export default function Home() {
  const [genkiLessons, setGenkiLessons] = useState<Set<number>>(new Set());
  const [wordTypes, setWordTypes] = useState<Set<string>>(new Set());
  const [forms, setForms] = useState<Set<Form>>(new Set());
  const [words, setWords] = useState<Array<Word>>([]);
  const [duration, setDuration] = useState(120); // 2 minutes default
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Game state
  const [timeLeft, setTimeLeft] = useState(duration);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayText, setDisplayText] = useState<'漢字' | 'ひらがな' | 'ふりがな'>('漢字');
  const [showEnglishHints, setShowEnglishHints] = useState(false);

  const generateProblem = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    const formsArray = Array.from(forms);
    const form = formsArray[Math.floor(Math.random() * formsArray.length)];
    const answer = conjugate(word, form);

    return {
      word: word,
      form: form,
      answer
    };
  };

  const startGame = () => {
    setTimeLeft(duration);
    setScore(0);
    setWords(getVocabulary());
  };

  // Effect to handle generating the first problem when words are generated
  useEffect(() => {
    if (words.length > 0) {
      setCurrentProblem(generateProblem());
      setIsPlaying(true);
    }
  }, [words]);

  const endGame = () => {
    setIsPlaying(false);
    setTimeLeft(duration);
    setCurrentProblem(null);
    setUserAnswer('');
  };

  const checkAnswer = () => {
    if (!currentProblem || userAnswer.trim() === '') return;

    const isCorrect = userAnswer === currentProblem.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setUserAnswer('');
      setCurrentProblem(generateProblem());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      checkAnswer();
    }
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
              <div className="p-4">Time left: {timeLeft}</div>
              <div className="p-4">Score: {score}</div>
            </div>

            {currentProblem && (
              <Gameplay
                problem={currentProblem}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                onKeyDown={handleKeyDown}
                inputRef={inputRef}
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
      </main>
    </div>
  );
}
