interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // should be required
  label: string;
  id: string;
}

export default function InputCheckbox ({ label, id, ...rest} : InputCheckboxProps) {
  return (
    <div className="flex items-center text-base">
      <input
        type="checkbox"
        id={id}
        {...rest}
        className="ring-1 ring-dark appearance-none p-1.5 cursor-pointer checked:bg-orange-500"
      />
      <label htmlFor={id} className="cursor-pointer p-6">{label}</label>
    </div>
  )
}

