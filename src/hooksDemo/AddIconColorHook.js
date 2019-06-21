import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import useRandomColor from './AbstractColorHook'


const AddIconColorHook = () => {
  const colors = ["cyan", "teal", "aqua", "blue", "navy"];


  // Array Destructuring!
  // Using state inside a functional component
  const [color, setColor] = useRandomColor(colors, "navy");

  return (
    <div
      style={{
        textAlign: "left",
        padding: "20px 0",
        backgroundColor: color
      }}
    >
      <h2 style={{ color: "#fff", fontStyle: 'italic', fontFamily: "monospace" }}>AddIconColorHook</h2>
      <h2 style={{ color: "#fff", fontStyle: 'italic', fontFamily: "monospace" }}>Click below button to change color</h2>
      <br />
      {/* <AddIcon onClick={setColor}/> */}
      <Button variant="contained" color="primary" onClick={setColor}>
        Primary
      </Button>
    </div>
  );

}

export default AddIconColorHook