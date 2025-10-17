interface InputRadioProps {
  id: string;
  title: string;
  name: string;
  value: string;
  hidden?: boolean;
  checked?: boolean;
  onChange: (value: string) => void
}

export default function InputRadio ({ id, title, name, value, hidden, checked, onChange }: InputRadioProps) {
  return (
    <div className="flex items-center gap-5">
      <label
        htmlFor={id} 
        className={
          `
            px-2 py-5 md:p-6 w-full text-center cursor-pointer leading-3 md:hover:text-primary transition-colors duration-300 ease-in-out
            ${checked && 'font-bold text-red-600'}
          `
        }
      >
        { title }
      </label>

      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        hidden={hidden}
        onChange={() => onChange(value)}
      />
    </div>
  )
}
