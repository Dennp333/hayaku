import { Problem } from '../types/Problem';

interface EndGameProps {
  score: number;
  onRestart: () => void;
  onReturnToMenu: () => void;
  mistakes: Problem[];
  displayText: '漢字' | 'ひらがな';
}

export default function EndGame({
  score,
  onRestart,
  onReturnToMenu,
  mistakes,
  displayText
}: EndGameProps) {
  // Deduplicate mistakes using a Map with kanji+form as key
  const uniqueMistakesMap = new Map(
    mistakes.map(mistake => [`${mistake.word.kanji}-${mistake.form}`, mistake])
  );
  const uniqueMistakes = Array.from(uniqueMistakesMap.values());

  // Group unique mistakes by form
  const mistakesByForm = uniqueMistakes.reduce((acc, mistake) => {
    const form = mistake.form;
    if (!acc[form]) {
      acc[form] = [];
    }
    acc[form].push(mistake);
    return acc;
  }, {} as Record<string, Problem[]>);

  // Sort forms by number of mistakes in descending order
  const sortedForms = Object.entries(mistakesByForm)
    .sort(([, a], [, b]) => b.length - a.length);

  return (
    <div className="bg-[#dddddd] p-8 max-w-2xl mx-auto space-y-4">
      <div className="text-4xl text-center py-8">
        Score: {score}
        <div className="text-2xl mt-2">
          Accuracy: {score > 0 ? Math.round(((score - mistakes.length) / score) * 100) : 0}%
        </div>
      </div>

      {mistakes.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Mistakes</h2>
          <div className="space-y-6">
            {sortedForms.map(([form, problems]) => (
              <div key={form} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">{form}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-center justify-between border-b py-1">
                      <div>
                        {displayText === '漢字' ? problem.word.kanji : problem.word.hiragana}
                      </div>
                      <div className="text-gray-600">
                        Answer: {displayText === '漢字' ? problem.answerKanji: problem.answerKana}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={onRestart}
          className="border px-1 bg-gray-100 hover:cursor-pointer"
        >
          Play Again
        </button>
        <button
          onClick={onReturnToMenu}
          className="border px-1 bg-gray-100 hover:cursor-pointer"
        >
          Return to Menu
        </button>
      </div>
    </div>
  );
} 