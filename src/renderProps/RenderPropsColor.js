import React, { useState } from "react";
import { Button } from "@material-ui/core";

class ColorLogic extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'purple'
    }
  }

  changeColor = () => {
    const colors = ["cyan", "blue", "green", "black", "purple", "red", "navy", "teal", "olive", "yellow", "maroon"];
    const lenColors = colors.length;
    const index = Math.floor(Math.random() * lenColors);
    const pickedColor = colors[index];
    this.setState({ color: pickedColor});
  }

  render = () => {
    const { color } = this.state
    console.log(this.props)


    return (
      <div>
        {this.props.render(this.changeColor, color)}
      </div>
    )}

}

class ColorBanner extends React.Component {
 
  myRender = (buttonAction, color) => {
    console.log('Checking Color', color)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          backgroundColor: color
        }}
      >
        <h2 style={{ color: "#fff" }}>Render Props</h2>
        <h2 style={{ color: "#fff" }}>Click below button to change color</h2>
        <br />
        <Button onClick={() => buttonAction()}>Change</Button>
      </div>
    )
  }

  render = () => {
  return (
    <ColorLogic
      render={(buttonAction, color) => this.myRender(buttonAction, color)}
    />
    )
  } 
}


export default ColorBanner