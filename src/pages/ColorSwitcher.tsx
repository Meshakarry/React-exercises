import { useEffect, useState } from 'react';
import ColorPicker from '../components/ColorPicker';

export default function ColorSwitcher () {
  const [bgColor, setBgColor] = useState('#e66465');

  function colorChangeHandler(newColor: string) {
    setBgColor(newColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor])

  return (
    <div className="overflow-hidden relative">
      <h1>Color switcher</h1>
      <ColorPicker bgColor={bgColor} onBgColorChange={colorChangeHandler} />
    </div>
  )
}
