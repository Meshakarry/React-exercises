import { useState } from 'react';
import Icon from './Icon';

interface Option<T extends string | number> {
  label: string;
  value: T;
}

interface InputDropdownProps<T extends string | number> {
  id: string;
  options: Option<T>[];
  defaultOption?: Option<T>;
  label?: string;
  onChange?: (value: T) => void
}

export default function InputDropdown<T extends string | number>({ id, options, defaultOption, label, onChange }: InputDropdownProps<T>) {
  const [selectedOption, setSelectedOption] = useState(defaultOption?.value ?? options[0].value);

  function handleChange (e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOption(e.target.value as T);
    onChange?.(e.target.value as T);
  }

  return (
  <div className="flex items-center gap-2">
    <label htmlFor="id" className="text-blue-800">
      { label }
    </label>

    <div className="relative">
      <select
        id={id}
        className="cursor-pointer appearance-none border border-gray-500 bg-transparent pl-2.5 pr-8 py-1.5 text-gray-400"
        value={selectedOption}
        onChange={handleChange}
      >
        {
          options.map(option =>
            <option
              key={option.label}
              value={option.value}
              className="px-2.5 text-black"
            >
              { option.label }
            </option>
          )
        }
      </select>

      <span className="absolute inset-y-0 flex items-center pointer-events-none end-0 px-2.5">
        <Icon
          name="chevron"
          className="w-4 h-4 text-gray-600"
          aria-hidden="false"
        />
      </span>
    </div>
  </div>

  )
}
