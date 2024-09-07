// components/PagesReadInput.tsx
import { useState } from 'react';
import { Button } from '../ui/button';

interface PagesReadInputProps {
  onSubmit: (pages: number) => void;
}

export default function PagesReadInput({ onSubmit }: PagesReadInputProps) {
  const [pages, setPages] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={pages}
        onChange={(e) => setPages(Number(e.target.value))}
        className="p-2 border rounded"
      />
      <Button
      onClick={() => onSubmit(pages)}
      variant='default'
      >
        Submit
      </Button>
    </div>
  );
}
