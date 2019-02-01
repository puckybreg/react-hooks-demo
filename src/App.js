import React, { Component } from 'react'
// import config from './config/config'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import ImageTile from './tile'
import logo from './assets/logo.svg'
import icon from './assets/icon-no-avatar.png'
import puzzleLordStein from './assets/puzzle_lord.jpeg'
import puzzleLordSchafer from './assets/puzzle_lord_2.jpeg'




class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  callback = (code) => {
    console.log("Callback is called")

  }


  render = () => {
    // const codeValue = config.codeValue


    return (
      <div className="container">
        <h1>Puzzle Palooza</h1>
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={logo} callback={this.callback}/>
            <ImageTile image={icon} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            <ImageTile image={puzzleLordStein}/>
            <ImageTile image={puzzleLordSchafer}/>
          </div>
        </div>
      </div>
    )

  } 

}

export default App