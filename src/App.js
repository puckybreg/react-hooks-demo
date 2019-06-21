import React, { Component } from 'react'
import { Router as BrowserRouter } from "react-router-dom";
// import config from './config/config'
import ImageTile from './tile'
import TwoRenderProps from "./hooksSrc/two-renderprops";
import LoadingProvider from "./hooksSrc/loading";
import OneHoc from "./hooksSrc/one-hoc";
import TwoHOC from "./hooksSrc/two-hoc"
import BasicHook from "./hooksSrc/basic-hook"
import ColorHook from "./hooksSrc/color-hook"
import RefactoredColorHook from "./hooksSrc/RefactoredColorHook"
import ColorBanner from "./hooksSrc/ColorBanner"
import ColorHOC from "./hooksSrc/ColorHoc"
import { Grid } from "@material-ui/core";


const code = process.env.REACT_APP_PUZZLE_CODE

class App extends Component {
  constructor () {
    super()
    this.state = {
      codeAccumulation: ''
    }
  }

  callback = (code) => {
    console.log("Code", code)
    const { codeAccumulation } = this.state
    const newCode = codeAccumulation + code
    console.log("newCode", newCode)
    this.setState({codeAccumulation: newCode})
  }


  render = () => {
    const codeValue = process.env.REACT_APP_PUZZLE_ANSWER

    const image1 = process.env.REACT_APP_PUZZLE_IMAGE1
    const { codeAccumulation } = this.state

    return (
        <div>
          {/* <ColorHook/> */}
          {/* <RefactoredColorHook/> */}
          {/* <ColorBanner/> */}
          <ColorHOC/>
        </div>
    )

  } 

}

export default App