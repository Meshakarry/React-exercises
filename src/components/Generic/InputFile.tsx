import { useState } from 'react'

interface InputFileProps {
  id: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: File | File[] | null;
  className?: string;
  helperText?: string;
  error?: string;
  onChange?: (files: FileList | null) => void;
}

export default function InputFile({
  id,
  label,
  accept = "*/*",
  multiple = false,
  disabled = false,
  required = false,
  value,
  className,
  helperText,
  error,
  onChange,
}: InputFileProps) {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const names = Array.from(files).map((file) => file.name);
    setFileNames(names);

    onChange?.(files);
  };

  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      {label && (
        <label
          htmlFor={id}
          className={
            `
              font-bold text-lg
              ${disabled && 'opacity-60 cursor-not-allowed'}
            `
          }
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={
          `rounded-md border border-gray-500 p-3 flex flex-col gap-2
          ${disabled && 'bg-gray-100 cursor-not-allowed'}
          ${error && 'border-red-500'}
        `}
      >
        <input
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          onClick={(e: any) => (e.target.value = null)}
          className="block w-full text-sm text-gray-900 file:mr-3 file:rounded-md file:border-0 file:bg-gray-200 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-300"
        />

        {fileNames.length > 0 && (
          <ul className="text-sm text-gray-600">
            {fileNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>

      {helperText && !error && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
