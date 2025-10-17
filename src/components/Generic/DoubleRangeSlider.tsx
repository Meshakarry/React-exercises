import { useMemo, useState, useCallback } from 'react';

interface RangeValue {
  min?: number
  max?: number
}

interface DoubleRangeSliderProps {
  range: RangeValue
  updateRange: (range: RangeValue) => void
}

export default function DoubleRangeSlider ({ range, updateRange }: DoubleRangeSliderProps) {
  const min = range.min ?? 0;
  const max = range.max ?? 100;
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);
  const safeRangeSpan = Math.max(max - min, 1);

  const calculateThumbPositionInPercent = (value: number) =>
    ((value - min) / safeRangeSpan) * 100;

  const fromThumbPosition = calculateThumbPositionInPercent(from);
  const toThumbPosition = calculateThumbPositionInPercent(to);
  const trackWidth = toThumbPosition - fromThumbPosition;

  const onFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setFrom(Math.min(Math.max(value, min), to - 1));
  }

  const onToInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setTo(Math.max(Math.min(value, max), from + 1));
  }

  const emitUpdate = () => {
    updateRange({ min: from, max: to });
  }

  return (
    <div className="relative py-4">
    <div className="absolute top-1/2 inset-x-2 h-2 bg-blue-300 rounded-full -translate-y-1/2">
      <div
        className="absolute h-full bg-blue-600 rounded-full"
        style={{
          left: `${fromThumbPosition}%`,
          width: `${trackWidth}%`,
        }}
      />
    </div>

    <div className="relative h-2">
      <input
        type="range"
        className="absolute w-full h-2 pointer-events-none appearance-none bg-transparent top-2 -translate-y-1/2"
        min={min}
        max={max}
        style={{ zIndex: (from === to) && from === max ? 50 : 10 }}
        value={from}
        onInput={onFromInput}
        onMouseUp={emitUpdate}
        onTouchEnd={emitUpdate}
      />
      <input
        type="range"
        className="absolute w-full h-2 pointer-events-none appearance-none bg-transparent top-2 -translate-y-1/2"
        min={min}
        max={max}
        style={{ zIndex: (from === to) && from === min ? 50 : 10 }}
        value={to}
        onInput={onToInput}
        onMouseUp={emitUpdate}
        onTouchEnd={emitUpdate}
      />
    </div>
  </div>
  )
}
