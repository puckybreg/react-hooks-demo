import React, { useState } from "react";
import { Button } from "@material-ui/core";


function withSubscription(WrappedComponent, colors) {

  return class extends React.Component {
    constructor () {
      super()
      this.state = {
        color: 'red'
      }
    }


  changeColor = () => {
    const lenColors = colors.length
    const index = Math.floor(Math.random() * lenColors);
    const pickedColor = colors[index];
    this.setState({ color: pickedColor});
  }

  render = () => {
    const { color } = this.state

    return (
      <WrappedComponent
        color={color} 
        changeColor={() => this.changeColor()}
      />
    )}
  }
}

class ColorHOC extends React.Component {


  render = () => {
    const { color, changeColor } = this.props

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
        <Button onClick={() => changeColor()}>Change</Button>
      </div>
    )}

}


const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon"]

export default withSubscription(ColorHOC, colors)