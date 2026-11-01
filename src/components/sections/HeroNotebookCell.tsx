'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const OUTPUT_STEPS = [
  'Python done',
  'Data ready',
  'Model trained',
  'App live. Share it with the world.',
];

export default function HeroNotebookCell() {
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const runCell = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOutputLines([]);
    setIsRunning(true);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setOutputLines(OUTPUT_STEPS);
      setIsRunning(false);
      return;
    }

    let stepIndex = 0;
    const executeNext = () => {
      if (stepIndex < OUTPUT_STEPS.length) {
        const nextStep = OUTPUT_STEPS[stepIndex];
        setOutputLines((prev) => [...prev, nextStep]);
        stepIndex++;
        timeoutRef.current = setTimeout(executeNext, 500);
      } else {
        setIsRunning(false);
      }
    };

    executeNext();
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        runCell();
      }, 400);
      return () => {
        clearTimeout(timer);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    } else {
      const timer = setTimeout(() => {
        setOutputLines(OUTPUT_STEPS);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [runCell]);

  return (
    <div className="cell" aria-label="Example Jupyter notebook cell">
      <div className="cell-bar">
        <span>bootcamp_2026.ipynb</span>
        <button
          type="button"
          onClick={runCell}
          disabled={isRunning}
          className="cell-button"
          aria-label="Run notebook code cell"
        >
          {isRunning ? 'Running...' : 'Run cell'}
        </button>
      </div>

      <pre className="cell-pre font-mono">
        <span className="cell-k">import</span> bootcamp{'\n'}
        {'\n'}
        model = bootcamp.<span className="cell-k">learn</span>(&quot;Python&quot;, &quot;Data&quot;, &quot;ML&quot;){'\n'}
        app   = bootcamp.<span className="cell-k">deploy</span>(model)
      </pre>

      <div
        className="cell-out font-mono text-[13.5px]"
        aria-live="polite"
      >
        {outputLines.length === 0 ? (
          <span className="text-[#666666]">Output appears here.</span>
        ) : (
          outputLines.map((line, idx) => {
            const firstWord = line.split(' ')[0];
            const rest = line.substring(firstWord.length);
            return (
              <div key={idx}>
                <b>{firstWord}</b>
                {rest}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
