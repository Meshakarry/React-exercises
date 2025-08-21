interface RangeSliderProps {
  value: number
  onValueChange: (value: number) => void
}

export default function RangeSlider ({ value, onValueChange }: RangeSliderProps) {
  return (
    <div className="relative w-80 flex">
      {/* Dots (0, 50, 100) */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
        {[0, 50, 100].map((dot) => (
          <span
            key={dot}
            className="w-3 h-3 rounded-full bg-[#b0c3e9]"
          />
        ))}
      </div>

      {/* track */}
      <div
        className={`
          absolute z-10 top-1/2 w-full left-0 h-2 -translate-y-1/2 bg-[#e0e7ff] 
          after:absolute after:left-0 after:top-0 after:bg-[#b0c3e9] after:h-2 after:rounded-full after:pointer-events-none after:transition-all after:duration-150 
          after:w-[var(--filled-track-position)]
        `}
        style={{ '--filled-track-position': `${value}%` } as React.CSSProperties }
      />

      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className="w-full z-30 appearance-none bg-transparent h-1.5 rounded cursor-pointer relative"
      />
    </div>
  )
}