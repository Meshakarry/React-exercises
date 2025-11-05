
import { useState } from "react";

// Method return a random number from 0 to 255 
const rgbValue = () => {
  return Math.floor(Math.random() * 256)
}

// Method generates an array of rgb colors
const generateColors = (num: number) => {
  let colors = []

  for(let i=0; i<num; i++){
    const red = rgbValue()
    const blue = rgbValue()
    const green = rgbValue()
    colors.push(`rgb(${red},${blue},${green})`)
  }
  return colors
}

export default function ColorBoxContainer () {
  const [colors, setColors] = useState(generateColors(18));

  // changeColor(c){
  
  //   // Create new random rgb color
  //   let newColor
  //   do{
  //     newColor = `rgb(
  //       ${rgbValue()},
  //       ${rgbValue()},
  //       ${rgbValue()}
  //     )`
      
  //   // If new rgb color is equal to previous 
  //   // color of the box then again create new 
  //   // rgb color value
  //   }while(newColor === c)

  //   // Change colors array state by inserting 
  //   // new color value in place of previous color
  //   this.setState(st => ({
  //     colors : st.colors.map(color => {
  //       if(color !== c) return color
  //       return newColor
  //     })
  //   }))
  // }

  return (
    <div className="min-h-svh flex flex-wrap">
      {
        colors.map((color, index) =>
          <div
            style={{
              backgroundColor: color,
              width:'13em',
              height:'13em'
            }}
            key={index}
          />
        )
      }
    </div>
  )
}
