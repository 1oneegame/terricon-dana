'use client'
import { useState } from 'react';
import BookSelector from '@/components/pomodoro/bookselector';
import PomodoroTimer from '@/components/pomodoro/timer';
import PagesReadInput from '@/components/pomodoro/readprocess';
import TimeSlider from '@/components/pomodoro/timeslider';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedBook, setSelectedBook] = useState('');
  const [sessionActive, setSessionActive] = useState(false);
  const [pagesRead, setPagesRead] = useState(0);
  const [timerDuration, setTimerDuration] = useState(25);

  const handleBookSelect = (book: string) => {
    setSelectedBook(book);
  };

  const handleSessionEnd = () => {
    setSessionActive(false);
  };

  const handlePagesSubmit = (pages: number) => {
    setPagesRead(pages);
  };

  return (
    <div className="p-4 bg-white text-black">
      <h1 className="text-3xl mb-4">Приложение для чтения с Pomodoro</h1>
      <BookSelector onSelect={handleBookSelect} />
      {selectedBook && !sessionActive && (
        <>
          <TimeSlider onChange={setTimerDuration} />
          <Button
          onClick={() => setSessionActive(true)}
            variant='default'>
            Начать сессию
          </Button>
        </>
      )}
      {sessionActive && (
        <PomodoroTimer duration={timerDuration} onEnd={handleSessionEnd} />
      )}
      {!sessionActive && selectedBook && (
        <PagesReadInput onSubmit={handlePagesSubmit} />
      )}
      {pagesRead > 0 && (
        <p className="mt-4">Вы прочитали {pagesRead} страниц книги "{selectedBook}".</p>
      )}
    </div>
  );
}
