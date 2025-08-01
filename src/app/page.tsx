'use client';

import { useState, useEffect, useRef } from "react";
import Menu from "./components/Menu";
import Gameplay from "./components/Gameplay";
import EndGame from "./components/EndGame";
import { Word } from "./types/Word";
import { getVocabulary } from "./lib/vocabulary/vocabulary";
import { conjugate } from "./lib/conjugator/conjugate";
import { Form, WordType, ADJECTIVE_FORMS, ADJECTIVE_TYPES, WORD_TYPES, FORMS, INFINITE_TIME} from "./types/constants";
import { Problem } from "./types/Problem";
import { submitResult, submitError } from "./lib/api";

type GameState = 'start' | 'playing' | 'end';

export default function Home() {
  // Settings
  const [genkiLessons, setGenkiLessons] = useState<Set<number>>(new Set());
  const [wordTypes, setWordTypes] = useState<Set<WordType>>(new Set());
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
  const [showHint, setShowHint] = useState(false);

  const isDevelopment = process.env.NODE_ENV === 'development';

  const generateProblem = () => {
    const word = words.current[Math.floor(Math.random() * words.current.length)];
    const formsArray = ADJECTIVE_TYPES.includes(word.type) ? Array.from(forms).filter(form => ADJECTIVE_FORMS.includes(form)) : Array.from(forms);
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
    words.current = getVocabulary(genkiLessons, wordTypes);
    if (words.current.length === 0) {
      alert('No words found with current settings. Please select more word types or genki lessons.');
      return;
    }

    if (ADJECTIVE_TYPES.some(type => wordTypes.has(type)) && !ADJECTIVE_FORMS.some(form => forms.has(form))) {
      alert('Adjectives are selected, but no selected forms apply to adjectives.');
      return;
    }

    // Save settings to localStorage
    localStorage.setItem('hayaku-settings', JSON.stringify({
      genkiLessons: Array.from(genkiLessons),
      wordTypes: Array.from(wordTypes),
      forms: Array.from(forms),
      duration,
      displayText,
      showEnglishHints
    }));

    setTimeLeft(duration);
    setScore(0);
    setShowHint(false);
    mistakes.current = [];
    addedToMistakes.current = false;
    setCurrentProblem(generateProblem());
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('end');
    setCurrentProblem(null);
    submitResult({
      numGenkiLessons: genkiLessons.size,
      maxGenkiLesson: Math.max(...genkiLessons),
      wordTypes: Array.from(wordTypes),
      forms: Array.from(forms),
      duration: duration,
      score: score,
      mistakes: mistakes.current,
      showEnglishHints: showEnglishHints,
      displayText: displayText
    });
  };

  const returnToMenu = () => {
    setGameState('start');
  };

  const nextProblem = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setShowHint(false);
    addedToMistakes.current = false;
    setCurrentProblem(generateProblem());
  }

  const checkAnswer = (answer: string) => {
    if (!currentProblem) return;
    const isCorrect = answer === currentProblem.answerKanji || answer === currentProblem.answerKana;
    if (isCorrect) {
      setScore(prev => prev + 1);
      nextProblem();
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

  const reportError = () => {
    if (!currentProblem) return;
    submitError(currentProblem);
    alert('Error reported. Thank you!');
    nextProblem();
  }

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && inputRef.current) {
      checkAnswer(inputRef.current.value);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      // When duration is set to infinite, timeLeft < 0 and we never enter this block
      timer = setInterval(() => {
        if (timeLeft <= 1) {
          clearInterval(timer);
          endGame();
        } else {
          setTimeLeft(prev => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState, currentProblem]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('hayaku-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setGenkiLessons(new Set(settings.genkiLessons));
      setWordTypes(new Set(settings.wordTypes));
      setForms(new Set(settings.forms));
      setDuration(settings.duration);
      setDisplayText(settings.displayText);
      setShowEnglishHints(settings.showEnglishHints);
    } else {
      setGenkiLessons(new Set(Array.from({ length: 23 }, (_, i) => i + 1)));
      setWordTypes(new Set(WORD_TYPES));
      setForms(new Set(FORMS));
    }
  }, []);

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
              <div className="p-4">Time left: {timeLeft === INFINITE_TIME ? 'Infinite' : timeLeft}</div>
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
                showHint={showHint}
                setShowHint={setShowHint}
              />
            )}

            <div className="flex justify-end p-4">
              <button
                onClick={reportError}
                className="px-4 py-1 border border-gray-300 hover:bg-gray-50"
              >
                Report Error
              </button>
              {(isDevelopment || duration === INFINITE_TIME) && (
                <button
                  onClick={endGame}
                  className="px-4 py-1 border border-gray-300 hover:bg-gray-50"
                >
                  End Game
                </button>
              )}
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
