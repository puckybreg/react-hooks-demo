import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useRandomColor from './AbstractColorHook'



const AddIconColorHook = () => {
  const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon", "navy", "aqua"];

  // Array Destructuring!
  // Using state inside a functional component
  const [color, setColor] = useRandomColor(colors, "teal");
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(Date.now())

  // const updateTimer = () => {
  //   const newTime = Date.now() - start
  //   setTime(newTime)
  //   console.log(time, start)
  // }

  const count = setInterval(setColor, 2000)

  // if (time > 3000) {
  //   console.log("Reset")
  //   setStart(Date.now())
  //   setTime(0)
  //   setColor()
  // }
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: color
      }}
    >
      <h3 style={{ color: "#fff" }}>TimerColorHook</h3>
      {/* <h1 style={{ color: "#fff" }}>{time}</h1> */}
      <br />
    </div>
  );

}

export default AddIconColorHook