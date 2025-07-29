import { Dispatch, SetStateAction } from 'react';
import { WORD_TYPES, FORMS, Form, WordType, VERB_TYPES, INFINITE_TIME } from '../types/constants';

interface MenuProps {
  genkiLessons: Set<number>;
  setGenkiLessons: Dispatch<SetStateAction<Set<number>>>;
  wordTypes: Set<WordType>;
  setWordTypes: Dispatch<SetStateAction<Set<WordType>>>;
  forms: Set<Form>;
  setForms: Dispatch<SetStateAction<Set<Form>>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  displayText: '漢字' | 'ひらがな';
  setDisplayText: Dispatch<SetStateAction<'漢字' | 'ひらがな'>>;
  showEnglishHints: boolean;
  setShowEnglishHints: Dispatch<SetStateAction<boolean>>;
  startGame: () => void;
}

export default function Menu({
  genkiLessons,
  setGenkiLessons,
  wordTypes,
  setWordTypes,
  forms,
  setForms,
  duration,
  setDuration,
  displayText,
  setDisplayText,
  showEnglishHints,
  setShowEnglishHints,
  startGame
}: MenuProps) {

  const handleGenkiLessonsChange = (level: number) => {
    setGenkiLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(level)) {
        newSet.delete(level);
      } else {
        newSet.add(level);
      }
      return newSet;
    });
  };

  const handleWordTypeChange = (type: WordType) => {
    setWordTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  };

  const handleFormChange = (form: Form) => {
    setForms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(form)) {
        newSet.delete(form);
      } else {
        newSet.add(form);
      }
      return newSet;
    });
  };

  const isVerb = (type: WordType) => VERB_TYPES.includes(type);

  return (
    <div className="bg-[#dddddd] p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Hayaku!</h1>
      <p>Select which Genki lessons to include vocabulary from, and which word types and forms to practice.
        Try to conjugate as many words as you can!
        <br /><br />
        (You may type in either Japanese keyboard or romaji.)
      </p>

      <div>
        <p className="mb-2 font-bold">Genki:</p>
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 23 }, (_, i) => i + 1).map(level => (
            <div key={level} className="flex items-center gap-1">
              <input
                type="checkbox"
                id={`level-${level}`}
                checked={genkiLessons.has(level)}
                onChange={() => handleGenkiLessonsChange(level)}
                className="form-checkbox"
              />
              <label htmlFor={`level-${level}`} className="select-none text-sm">
                L{level}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-bold">Word Types:</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {WORD_TYPES.filter(isVerb).map(type => (
              <div key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={wordTypes.has(type)}
                  onChange={() => handleWordTypeChange(type)}
                  className="form-checkbox"
                />
                <label htmlFor={`type-${type}`} className="select-none">
                  {type}
                </label>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {WORD_TYPES.filter(type => !isVerb(type)).map(type => (
              <div key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={wordTypes.has(type)}
                  onChange={() => handleWordTypeChange(type)}
                  className="form-checkbox"
                />
                <label htmlFor={`type-${type}`} className="select-none">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 font-bold">Forms:</p>
        <div className="grid grid-cols-2 gap-4">
          {FORMS.map(form => (
            <div key={form} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`form-${form}`}
                checked={forms.has(form)}
                onChange={() => handleFormChange(form)}
                className="form-checkbox"
              />
              <label htmlFor={`form-${form}`} className="select-none">
                {form.replace(/-/g, ' ')}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="english-hints" className="select-none">
          English hints:
        </label>
        <button
          role="switch"
          id="english-hints"
          aria-checked={showEnglishHints}
          onClick={() => setShowEnglishHints(prev => !prev)}
          className={`${
            showEnglishHints ? 'bg-blue-600' : 'bg-gray-200 border border-black'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              showEnglishHints ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <label htmlFor="display-text">Display text:</label>
        <select
          id="display-text"
          value={displayText}
          onChange={(e) => setDisplayText(e.target.value as '漢字' | 'ひらがな')}
          className="border bg-white"
        >
          <option value="漢字">漢字</option>
          <option value="ひらがな">ひらがな</option>
        </select>
      </div>

      <div className="flex items-center gap-1">
        <label htmlFor="duration">Duration:</label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          className="border bg-white"
        >
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
          <option value="120">120 seconds</option>
          <option value="180">180 seconds</option>
          <option value={INFINITE_TIME}>Infinite</option>
        </select>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={startGame}
          className="border px-1 bg-gray-100 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={genkiLessons.size === 0 || wordTypes.size === 0 || forms.size === 0}
        >
          Start
        </button>
      </div>
    </div>
  );
} 