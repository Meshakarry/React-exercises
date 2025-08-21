import { useState } from "react";
import RangeSlider from '../components/RangeSlider';

export default function RangeSliderExample() {
  const [value, setValue] = useState(0);

  // scale = 1 + (value / 100)
  const scale = 1 + value / 100;

  return (
    <div className="flex flex-col items-center gap-8 container">
      {/* Image that scales */}
      <div
        className="w-full aspect-video overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?_gl=1*11rh1o0*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjIwMTQkajE4JGwwJGgw"
          alt="Cute animal"
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </div>

        {/* Slider */}
        <RangeSlider
          value={value}
          onValueChange={setValue}
        />
    </div>
  );
}
