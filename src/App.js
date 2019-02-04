import React, { Component } from 'react'
// import config from './config/config'
import ImageTile from './tile'
import logo from './assets/logo.svg'
import icon from './assets/icon-no-avatar.png'
import puzzleLordStein from './assets/puzzle_lord.jpeg'
import puzzleLordSchafer from './assets/puzzle_lord_2.jpeg'
import stein1 from './assets/baseball_stein.jpg'
import stein2 from './assets/baseball_stein2.jpg'
import stein3 from './assets/Trans_Fats_Stein.jpg'
import stein4 from './assets/screen_shot2.png'
import stein5 from './assets/screen_shot.png'

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
    const codeValue = process.env.PUZZLE_ANSWER
    console.log("codeValue", codeValue)

    const { codeAccumulation } = this.state
    const env = process.env
    console.log("env", env)

    return (
      <div className="container">
        <h1>Puzzle Palooza</h1>
        { (code === codeAccumulation) &&
          <div>{codeValue}</div>
        }
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={stein1} callback={() => this.callback('E')}/>
            <ImageTile image={stein2} callback={() => this.callback('G')}/>
            <ImageTile image={stein3} callback={() => this.callback('L')}/>
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
            <ImageTile image={stein4} callback={() => this.callback('A')} />
            <ImageTile image={stein5} callback={() => this.callback('B')} />
          </div>
        </div>
      </div>
    )

  } 

}

export default App