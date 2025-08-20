interface ColorPickerProps {
  bgColor: string
  onBgColorChange: (color: string) => void,
}

export default function ColorPicker ({ bgColor, onBgColorChange }: ColorPickerProps) {
  return (
    <div>
      <input
        type="color"
        id="body"
        name="body"
        value={bgColor}
        onChange={(e) => onBgColorChange(e.target.value.toLowerCase())}
      />
      <label htmlFor="body">Head</label>
    </div>
  )
}