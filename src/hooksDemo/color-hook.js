import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useRandomColor from "./AbstractColorHook"


const ColorHook = () => {
  const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon"];

  // Array Destructuring!
  // Using state inside a functional component
  // const [color, setColor] = useState("red");

  const [ color, getNewColor] = useRandomColor(colors, "olive")

  // const changeColor = () => {
  //   const index = Math.floor(Math.random() * lenColors);
  //   const pickedColor = colors[index];
  //   setColor(pickedColor);
  // };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: color
      }}
    >
      <h2 style={{ color: "#fff" }}>ColorHook</h2>
      <h2 style={{ color: "#fff" }}>Click below button to change color</h2>
      <br />
      <Button onClick={getNewColor}>Change</Button>
    </div>
  );

}

export default ColorHook