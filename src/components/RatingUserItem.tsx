import { Rating } from '../pages/ReviewService'

interface RatingUserItemProps {
  allRatings: Rating[]
}

export default function RatingUserItem ({ allRatings }: RatingUserItemProps) {
  return (
    <ul className="flex flex-col gap-6">
      {
        allRatings.map((item: Rating, index: number) =>
          <li
            className="p-4 rounded-lg grid grid-cols-12 gap-3 border border-gray-300"
            key={index}
          >
            <img
              src={item.picture.large}
              alt={`${item.name.first}-${item.name.last}`}
              className="col-span-4 h-full"
            />

            <div className="col-span-8 flex flex-col gap-4">
              <h3 className="font-bold">{`${item.name.first}-${item.name.last}`}</h3>
              <h4>Email: { item.email }</h4>
              <h4>Gender: { item.gender }</h4>
              <h4>Phone: { item.phone }</h4>
              <h4>Age: { item.dob.age }</h4>
            </div>
          </li>
        )
      }
    </ul>
  )
}