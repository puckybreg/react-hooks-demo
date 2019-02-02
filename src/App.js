import React, { Component } from 'react'
// import config from './config/config'
import ImageTile from './tile'
import logo from './assets/logo.svg'
import icon from './assets/icon-no-avatar.png'
import puzzleLordStein from './assets/puzzle_lord.jpeg'
import puzzleLordSchafer from './assets/puzzle_lord_2.jpeg'

/* TODO:
  - Add new photos of stein
  - Add animations after correct answer
  - Add an enviroment and config set up

*/
const code = 'EGHY'

class App extends Component {
  constructor () {
    super()
    this.state = {
      codeAccumulation: ''
    }
  }

  callback = (code) => {
    const { codeAccumulation } = this.state
    // console.log("Callback is called", codeAccumulation)
    // console.log("Incoming code", code)
    const newCode = codeAccumulation + code
    console.log("newCode", newCode)
    this.setState({codeAccumulation: newCode})
    // console.log("codeAccumulation", codeAccumulation)
  }


  render = () => {
    const codeValue = 'Follow Me To the Answer' // config.codeValue
    const { codeAccumulation } = this.state


    return (
      <div className="container">
        <h1>Puzzle Palooza</h1>
        { (code === codeAccumulation) &&
          <div>{codeValue}</div>
        }
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={logo} callback={() => this.callback('E')}/>
            <ImageTile image={icon} callback={() => this.callback('G')}/>
            <ImageTile image={icon} callback={() => this.callback('L')}/>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={puzzleLordStein} callback={() => this.callback('H')} />
            <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Y')} />
            <ImageTile image={puzzleLordStein} callback={() => this.callback('M')} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={puzzleLordStein} callback={() => this.callback('N')} />
            <ImageTile image={logo} callback={() => this.callback('A')} />
            <ImageTile image={logo} callback={() => this.callback('B')} />
          </div>
        </div>
      </div>
    )

  } 

}

export default App