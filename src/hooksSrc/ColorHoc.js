import React, { useState } from "react";
import { Button } from "@material-ui/core";

function withSubscription(WrappedComponent, selectData) {

  return class extends React.Component {
    constructor () {
      super()
      this.state = {
        color: 'red'
      }
    }


  changeColor = (colors, lenColors) => {
    const index = Math.floor(Math.random() * lenColors);
    const pickedColor = colors[index];
    this.setState({ color: pickedColor});
  }

    render = () => {
      const { color } = this.state
      const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon"];
      const lenColors = colors.length;
  }

  render = () => {

    return (
      <WrappedComponent 
        changeColor={() => this.changeColor}
      />
    )}
}

class ColorHOC extends React.Component {


  render = () => {

    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          backgroundColor: color
        }}
      >
        <h2 style={{ color: "#fff" }}>Click below button to change color</h2>
        <br />
        <Button onClick={() => this.props(colors, lenColors)}>Change</Button>
      </div>
    )}

}


export default ColorHOC