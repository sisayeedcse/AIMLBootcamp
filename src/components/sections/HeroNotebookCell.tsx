'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const OUTPUT_STEPS = [
  '<b>Python</b> done',
  '<b>Data</b> ready',
  '<b>Model</b> trained',
  '<b>App</b> live. Share it with the world.',
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
        timeoutRef.current = setTimeout(executeNext, 550);
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
      const initialTimer = setTimeout(() => {
        runCell();
      }, 700);
      return () => {
        clearTimeout(initialTimer);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    } else {
      setOutputLines(OUTPUT_STEPS);
    }
  }, [runCell]);

  return (
    <div className="cell" aria-label="Example notebook cell">
      <div className="bar">
        <span>bootcamp_2026.ipynb</span>
        <button
          type="button"
          onClick={runCell}
          disabled={isRunning}
          aria-label="Run notebook cell code"
        >
          {isRunning ? 'Running...' : 'Run cell'}
        </button>
      </div>

      <pre className="font-mono text-[14px]">
        <span className="k">import</span> bootcamp{'\n'}
        {'\n'}
        model = bootcamp.<span className="k">learn</span>(&quot;Python&quot;, &quot;Data&quot;, &quot;ML&quot;){'\n'}
        app   = bootcamp.<span className="k">deploy</span>(model)
      </pre>

      <div
        className="out"
        aria-live="polite"
      >
        {outputLines.length === 0 ? (
          <span className="text-[#666666]">Output appears here.</span>
        ) : (
          outputLines.map((line, idx) => (
            <div
              key={idx}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))
        )}
      </div>
    </div>
  );
}
