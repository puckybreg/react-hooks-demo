import React, { Component } from 'react'
import { Router as BrowserRouter } from "react-router-dom";
// import config from './config/config'
import ImageTile from './tile'
import TwoRenderProps from "./hooksSrc/two-renderprops";
import LoadingProvider from "./hooksSrc/loading";
import OneHoc from "./hooksSrc/one-hoc";
import TwoHOC from "./hooksSrc/two-hoc"
import BasicHook from "./hooksSrc/basic-hook"
import ColorHook from "./hooksDemo/color-hook"
import RefactoredColorHook from "./hooksDemo/RefactoredColorHook"
import AddIconColorHook from "./hooksDemo/AddIconColorHook"
import TimerColorHook from "./hooksDemo/TimerColorHook"
import ColorBanner from "./hooksSrc/ColorBanner"
import ColorHOC from "./hooksSrc/ColorHoc"
import RenderPropsColor from "./renderProps/RenderPropsColor"
import { Grid } from "@material-ui/core";


const code = process.env.REACT_APP_PUZZLE_CODE

class App extends Component {

  render = () => {

    return (
        <div>
          {/* <ColorBanner/>
          <ColorHOC/>
          <RenderPropsColor/> */}
          <ColorHook/>
          {/* <RefactoredColorHook/> */}
          <AddIconColorHook/>
          {/* <TimerColorHook/> */}
        </div>
    )

  } 

}

export default App