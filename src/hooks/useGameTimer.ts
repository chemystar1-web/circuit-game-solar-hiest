// ============================================================
// GAME TIMER HOOK
// Starts immediately on mount, stops after all 8 levels done.
// ============================================================

import { useEffect, useRef, useState } from 'react';
import { LEVELS } from '../data/levels';

const TOTAL_LEVELS = LEVELS.length; // 8

/**
 * Returns { elapsed (ms), stopped } where:
 *   elapsed – milliseconds since the game started
 *   stopped – true once all levels have been completed
 */
export function useGameTimer(completedLevels: number[]) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(Date.now());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stoppedRef = useRef(false);

  const stopped = completedLevels.length >= TOTAL_LEVELS;

  useEffect(() => {
    if (stopped && !stoppedRef.current) {
      // Freeze on the exact final time
      stoppedRef.current = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (stoppedRef.current) return;

    // Tick every 100 ms for smooth tenths display
    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [stopped]);

  return { elapsed, stopped };
}

/** Format milliseconds → MM:SS.t (tenths of a second) */
export function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const tenths = Math.floor((ms % 1000) / 100);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${tenths}`;
}
