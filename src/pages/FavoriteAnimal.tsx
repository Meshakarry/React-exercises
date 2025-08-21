import AnimalFavoriteSelect from '../components/AnimalFavoriteSelect';
import AnimalSlideShow from '../components/AnimalSlideShow';
import { useEffect, useState } from 'react';

const animals = [
  {
    type: 'mouse',
    size: 'small',
    weight: 1,
    src: 'https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?_gl=1*yulskm*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjIwMzckajYwJGwwJGgw',
  },
  {
    type: 'dog',
    size: 'small',
    weight: 10,
    src: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?_gl=1*11rh1o0*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjIwMTQkajE4JGwwJGgw',
  },
  {
    type: 'lion',
    size: 'medium',
    weight: 150,
    src: 'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?_gl=1*1lbfbsp*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjE5ODUkajQ3JGwwJGgw',
  },
  {
    type: 'elephant',
    size: 'big',
    weight: 5000,
    src: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?_gl=1*17rshrm*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjE5NzIkajYwJGwwJGgw',
  },
  {
    type: 'tiger',
    size: 'medium',
    weight: 400,
    src: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?_gl=1*1qqp1bb*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjE3MDMkajM4JGwwJGgw',
  },
  {
    type: 'bat',
    size: 'small',
    weight: 8,
    src: 'https://images.pexels.com/photos/2587639/pexels-photo-2587639.jpeg?_gl=1*g62xqi*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjIwNjIkajM1JGwwJGgw',
  },
  {
    type: 'pig',
    size: 'small',
    weight: 40,
    src: 'https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?_gl=1*1lhx8cy*_ga*MTk4MzIyNDQ4NC4xNzUzMTA0Mjc3*_ga_8JE65Q40S6*czE3NTU3NjE2MjAkbzIkZzEkdDE3NTU3NjIwOTQkajMkbDAkaDA.',
  }
];

export default function FavoriteAnimal () {
  const [ currentIndex, setCurrentIndex] = useState(0);
  const [favoriteIndex, setFavoriteIndex] = useState(0);
  const currentActiveAnimal = animals[currentIndex];

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex => {
				const nextGP = prevIndex + 1;
				return nextGP % animals.length;
			});
		}, 5000)

		return () => clearInterval(intervalId);
	}, []);

  function selectFavoriteHandler (index: number) {
    setFavoriteIndex(index);
  }

  function resetFavoriteHandler() {
    setFavoriteIndex(0);
  }

  return (
    <div className="container">
      <h1 className="mb-6 text-white">Cutie animals</h1>

      <AnimalSlideShow
        animal={currentActiveAnimal}
        isFavorite={currentIndex === favoriteIndex}
      />

      <AnimalFavoriteSelect
        animals={animals}
        selectedValue={currentIndex}
        onReset={resetFavoriteHandler}
        onSelect={selectFavoriteHandler}
      />
    </div>
  )
}