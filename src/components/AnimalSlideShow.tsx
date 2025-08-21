interface AnimalSlideShowProps {
  animal: {
    type: string,
    size: string,
    weight: number,
    src: string
  }
  isFavorite: boolean
}
export default function AnimalSlideShow ({ animal, isFavorite }: AnimalSlideShowProps) {
  return (
    <img
      src={animal.src}
      alt={animal.type}
      width={300}
      height={300}
      className={`border-4 ${isFavorite ? 'border-red-600' : 'border-transparent'}`}
    />
  )
}