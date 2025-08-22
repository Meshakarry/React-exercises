interface SliderSlideProps {
  children: React.ReactNode
}

export default function ({ children }: SliderSlideProps) {
  return (
    <div className="swiper-slide">
      { children }
    </div>
  )
}