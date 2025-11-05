import { useState } from 'react';
import Input from './Input';

interface RangeFilter {
  from: number
  to: number
}

interface FromToFilterProps {
  title: string
  filter: RangeFilter
  onRangeUpdate: (filter: RangeFilter) => void
}
export default function FromToFilter ({ title, filter, onRangeUpdate }: FromToFilterProps) {
  const [range, setRange] = useState(filter);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRange(prevRange => {
      if (value === '') {
        return { ...prevRange, [name]: '' };
      }
      const numericValue = Number(value);
      console.log(numericValue, 'numeric value')

      if (numericValue < 0) return prevRange;
      if (isNaN(numericValue)) return prevRange;

      if (name === 'from' && numericValue > prevRange.to) {
        return { ...prevRange, from: prevRange.to};
      }

      if (name === 'to' && numericValue < prevRange.from) {
        return { ...prevRange, to: prevRange.from };
      }

      return { ...prevRange, [name]: numericValue};
    })
  }

  const applyFilter = () => {
    onRangeUpdate(range);
  }

  return (
    <div className="py-5 border-t-2 border-[#F2F2F2] min-w-52">
      <div className="px-6">
        <h2 className="mb-2 text-2xl">{ title }</h2>
          <div className="bg-[#FDFDFD] rounded-lg pl-3 pt-3.5 pb-4 pr-6 drop-shadow-card">
            <div className="flex items-center justify-between gap-3 mb-5 sm:flex-col">
              <Input
                id="from"
                name="from"
                type="number"
                label="From"
                value={range.from}
                max={range.to}
                onInput={(e) => handleInputChange(e)}
                onKeyDown={(e) => {
                  if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
                    e.preventDefault(); // block invalid characters
                  }
                }}
              />

              <div className="w-4 min-w-4 rounded-full h-0.5 bg-dark mt-6" />

              <Input
                id="to"
                name="to"
                type="number"
                label="To"
                value={range.to}
                min={range.from}
                onInput={(e) => handleInputChange(e)}
                onKeyDown={(e) => {
                  if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
                    e.preventDefault(); // block invalid characters
                  }
                }}
              />
            </div>

            <button onClick={applyFilter} className="block ml-auto rounded-xl py-1 px-4 bg-[#73D677] text-sm leading-none">Apply</button>
          </div>
      </div>
    </div>
  )
}
