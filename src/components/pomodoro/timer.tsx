// components/PomodoroTimer.tsx
import { useState, useEffect } from 'react';

interface PomodoroTimerProps {
  duration: number;
  onEnd: () => void;
}

export default function PomodoroTimer({ duration, onEnd }: PomodoroTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  return (
    <div>
      <h1 className="text-2xl">
        {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
      </h1>
    </div>
  );
}
