import { useRef } from 'react';
import SliderSlide from '../components/Swiper/SliderSlide';
import Slider from '../components/Swiper/Slider'

export default function SliderExample () {
  const swiperRef = useRef<any>(null);

  const slides = [
    { id: 1, title: "Slide 1", color: "bg-red-400" },
    { id: 2, title: "Slide 2", color: "bg-blue-400" },
    { id: 3, title: "Slide 3", color: "bg-green-400" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <h2>Ide gascina</h2>
        <div className="flex gap-2">
          <button 
            className="rounded-full w-12 aspect-square bg-red-500 text-white"
            onClick={() => swiperRef?.current?.swiper?.slidePrev()}
          >
            P
          </button>

          <button 
            className="rounded-full w-12 aspect-square bg-red-500 text-white"
            onClick={() => swiperRef?.current?.swiper?.slideNext()}
          >
            N
          </button>
        </div>
      </div>
      <Slider
        ref={swiperRef}
        options={{
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            enabled: false,
          }
        }}
      >
        {slides.map((slide) => (
          <SliderSlide key={slide.id}>
            <div
              className={`flex w-full items-center justify-center h-48 text-white text-xl rounded-lg ${slide.color}`}
            >
              {slide.title}
            </div>
          </SliderSlide>
        ))}
      </Slider>
    </div>
  )
}
