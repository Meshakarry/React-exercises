interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
	className?: React.HTMLProps<HTMLElement>["className"]
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({ id, label, className, onInput, ...rest }: InputProps) {

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-lg">
        { label }
      </label>
      <input
        id={id}
        {...rest}
        className={
          `
            shadow-lg rounded-md p-3 border border-gray-400
            ${className ?? ''}
            `
        }
        onInput={onInput}
      />
    </div>
  )
}
