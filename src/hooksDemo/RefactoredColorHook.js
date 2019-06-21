import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useRandomColor from './AbstractColorHook'



const RefactoredColorHook = () => {
  const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon", "navy", "aqua"];

  // Array Destructuring!
  // Using state inside a functional component
  const [color, setColor] = useRandomColor(colors, "red");

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: color
      }}
    >
      <h2 style={{ color: "#fff" }}>Refactored Color Hook</h2>
      <h2 style={{ color: "#fff" }}>Click below button to change color</h2>
      <br />
      <Button onClick={setColor}>Change</Button>
    </div>
  );

}

export default RefactoredColorHook