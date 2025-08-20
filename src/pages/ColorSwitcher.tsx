import { useEffect, useState } from 'react';
import ColorPicker from '../components/ColorPicker';

export default function ColorSwitcher () {
  const [bgColor, setBgColor] = useState('#e66465');
  // implement transition between color picker

  // const [bgTransitionActive, setBgTransitionActive] = useState(false);

  function colorChangeHandler(newColor: string) {
    console.log(newColor, 'e mehmede')
    setBgColor(newColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    // setBgTransitionActive((active) => !active);
  }, [bgColor])

  return (
    <div className="overflow-hidden relative">
      <h1>Color switcher</h1>
      {/* <div className={ 
        `
         w-8 h-8 rounded-[50%] absolute left-0 right-0 mx-auto top-[140px] transition-all duration-1000
         ${bgTransitionActive ? '-left-[32%] w-[160%] h-[160%] top-[calc(-50%_+_140px)]' : ''}
        `
      }
      /> */}
      <ColorPicker bgColor={bgColor} onBgColorChange={colorChangeHandler} />
    </div>
  )
}