interface AnimalFavoriteSelectProps {
  selectedValue: number
  onSelect: (selectedIndex: number) => void,
  animals: {
    type: string,
    size: string,
    weight: number,
    src: string
  }[]
  onReset: () => void
}

export default function AnimalFavoriteSelect ({ selectedValue, onSelect, animals, onReset }: AnimalFavoriteSelectProps) {
  return (
    <div className="mt-6">
        <h2>Pick your favorite animal</h2>
      <select
        value={selectedValue}
        onChange={(e) => onSelect(parseInt(e.target.value))}
        className="block mb-6 border border-blue-600 p-3 min-w-36"
      >
          {
            animals.map((animal, index) =>
            <option
              value={index}
              key={animal.type}
            >
              { animal.type }
            </option>
            )
          }
      </select>

      <button
        className="border-4 border-blue-700 p-6"
        onClick={onReset}
      >
        Reset your favorite animal
      </button>
    </div>
  )
}