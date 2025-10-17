import { useState, useMemo, useEffect } from 'react'
import InputRadio from './InputRadio'


interface Option {
  label: string
  value: string
}

interface TabsProps {
  activeTab?: string
  options: Option[]
  name: string
  onChange?: (tab: string) => void
}

const updateHash = (value: string) => history.replaceState(history.state, '', value ? `#${value}` : window.location.pathname);

export default function Tabs ({ options, name, activeTab, onChange }: TabsProps) {
  const [activeOption, setActiveOption] = useState(activeTab ?? options[0].value);

  const handleInputChange = (value: string) => {
    setActiveOption(value);
    updateHash(value);
    onChange?.(value);
  };

  const activeTabIndex = useMemo(
    () => options.findIndex((option) => option.value === activeOption),
    [options, activeOption]
  );

  const tabWidth = useMemo(() => `${100 / options.length}%`, [options]);

  const indicatorStyle = useMemo(
    () => ({
      width: tabWidth,
      transform: `translateX(${activeTabIndex * 100}%)`,
      transition: "transform 0.3s ease-in-out",
    }),
    [tabWidth, activeTabIndex]
  );

  useEffect(() => {
    const hashValue = location.hash.replace("#", "");
    const matchingTab = options.find((option) => option.value === hashValue);

    if (matchingTab && matchingTab.value !== activeOption) {
      setActiveOption(matchingTab.value);
      onChange?.(matchingTab.value);
    } else {
      updateHash(activeOption);
    }
  }, []);

  return (
    <div className="relative flex w-full">
      {
        options.map(option =>
          <div className="flex-1" key={option.value}>
            <InputRadio 
              id={option.value || 'default'}
              title={option.label}
              name={name}
              value={option.value}
              checked={activeOption === option.value}
              hidden={true}
              onChange={handleInputChange}
            />

            <div
              className="absolute -bottom-0.5 left-0 h-1 border-b-2 border-red-600 transition-transform duration-300 ease-in-out"
              style={indicatorStyle}
            />
          </div>
        )
      }
  </div>
  )
}
