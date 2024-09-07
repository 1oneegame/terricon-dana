// components/BookSelector.tsx
import { useState } from 'react';

const books = ['Book 1', 'Book 2', 'Book 3'];

interface BookSelectorProps {
  onSelect: (book: string) => void;
}

export default function BookSelector({ onSelect }: BookSelectorProps) {
  const [selectedBook, setSelectedBook] = useState('');

  return (
    <div>
      <select
        value={selectedBook}
        onChange={(e) => {
          setSelectedBook(e.target.value);
          onSelect(e.target.value);
        }}
        className="p-2 border rounded"
      >
        <option value="">Select a book</option>
        {books.map((book) => (
          <option key={book} value={book}>
            {book}
          </option>
        ))}
      </select>
    </div>
  );
}
