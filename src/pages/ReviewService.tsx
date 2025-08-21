import { useEffect, useState } from 'react';
import Rating from '../components/Rating';
import ReviewServiceDescription from '../components/ReviewServiceDescription';
import RatingUserItem from '../components/RatingUserItem';

interface User {
  picture: {
    large: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  gender: string
  phone: string
  dob: {
    age: number
  }
}

export interface Rating extends User {
  rating: number
}

export default function ReviewService () {
  const [allRatings, setAllRatings] = useState<Rating[]>([]);
  const [currentUser, setCurrentUser] = useState<User>({} as User)
  // calculate average of all the ratings
  const currentRating = allRatings.reduce((acc: number, r: any) => acc + r.rating, 0) / allRatings.length || 0;

  function handleRatingUpdate(rating: number) {
    const newRating = {
      ...currentUser,
      rating,
    }

    setAllRatings((ratings: Rating[]) => ([
      newRating,
      ...ratings
    ]))
  }

  useEffect(() => {
    async function fetchRandomUser() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data.results[0]);
        setCurrentUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching random user:", error);
      }
    }
    fetchRandomUser();
  }, [allRatings])

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-blue-600 p-4">
        <ReviewServiceDescription />

        <div className="mb-6">
          <h3 className="text-2xl mb-3 text-gray-400">Rating</h3>
          <Rating
            rating={currentRating}
            review_count={allRatings.length}
            onRatingUpdate={handleRatingUpdate}
          />
        </div>

        {
          allRatings?.length > 0 && (
            <RatingUserItem allRatings={allRatings} />
        )}
      </div>
    </div>
  )
}