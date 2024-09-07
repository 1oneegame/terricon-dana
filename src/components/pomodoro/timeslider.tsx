// components/TimeSlider.tsx
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface TimeSliderProps {
  onChange: (value: number) => void;
}

export default function TimeSlider({ onChange }: TimeSliderProps) {
  const [value, setValue] = useState(25);

  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
    onChange(newValue[0]);
  };

  return (
    <div className="my-4">
      <label className="block mb-2">Выберите время (минуты): {value}</label>
      <Slider
        defaultValue={[25]}
        min={1}
        max={60}
        step={1}
        onValueChange={handleChange}
        className="w-64 h-2"
        thumbClassName="h-4 w-4 bg-blue-500 rounded-full"
        trackClassName="bg-gray-300"
      />
    </div>
  );
}
