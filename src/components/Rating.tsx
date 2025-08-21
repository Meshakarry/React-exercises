import { useState } from 'react';
import Star from './Icons/Star'

interface RatingProps {
  rating: number
  review_count: number
  onRatingUpdate: (rating: number) => void
}

export default function Rating ({ rating, review_count, onRatingUpdate } : RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const displayRating = hovered ?? Math.round(rating)

  return (
    <div className="flex gap-2.5 items-center">
      <div className="flex gap-2">
        {
          [1,2,3,4,5].map(index =>
            <button
              key={index}
              onClick={() => onRatingUpdate(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={
                `
                  w-5 h-5
                 ${index <= displayRating ? 'text-[#be1e2d]' : 'text-[#f0f0f0]/70'}
                `
              }
            >
              <Star />
            </button>
          )
        }
        <span className="text-black/50 text-sm font-light">{ review_count } reviews</span>
      </div>
    </div>
  )
}