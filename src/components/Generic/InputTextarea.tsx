interface InputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  placeholder?: string;
  rows: number;
  onInput: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

export default function InputTextarea ({ id, label, placeholder, rows, onInput, ...rest}: InputTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-lg">
        { label }
      </label>
      <textarea
        id={id}
        {...rest}
        placeholder={placeholder}
        rows={rows}
        className="shadow-lg rounded-md p-3 border border-gray-400"
        onInput={onInput}
      />
    </div>
  )
}
