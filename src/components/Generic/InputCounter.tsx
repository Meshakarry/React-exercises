import { useState } from 'react';

export default function InputCounter () {
  const [quantity, setQuantity] = useState(1);

  function increase () {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decrease () {
    setQuantity(prevQuantity => prevQuantity === 1 ? 1 : prevQuantity - 1);
  }

  function handleBlur () {
    if (quantity < 1 || isNaN(quantity)) {
      setQuantity(1);
    }
  }

  return (
    <div className="flex relative w-20 font-bold">
      <div className="flex justify-center items-center basis-[60%]">
        <input 
          id="quantity"
          type="number"
          value={quantity}
          min="1"
          className="w-full text-lg text-center leading-5 rounded-s-md border border-r-0 py-4 px-1 bg-transparent border-gray-light focus-visible:outline-none"
          onInput={(e: React.InputEvent<HTMLInputElement>) => setQuantity(e.target.value)}
          onBlur={handleBlur}
        />
      </div>

      <div className="flex flex-col justify-evenly items-center basis-[40%] border border-gray-light rounded-e-md">
        <button
          className="w-full h-full leading-none flex items-center justify-center py-px"
          onClick={increase}
        >
          <span className="w-4 h-4 inline-block">
            +
          </span>
        </button>

        <hr className="text-gray-light w-full" />

        <button
          className="w-full h-full leading-none flex items-center justify-center py-px"
          onClick={decrease}
        >
          <span className="w-4 h-4 inline-block">
            -
          </span>
        </button>
      </div>
    </div>
  )
}
