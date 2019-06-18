import { useState } from "react";

// Our custom hook for use generating random colors
export const useRandomColor = (colors, initialColor) => {
  const lenColors = colors.length
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const index = Math.floor(Math.random() * lenColors);
    const pickedColor = colors[index];
    setColor(pickedColor);
  };

  return [color, changeColor]

}

export default useRandomColor