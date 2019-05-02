import React, { Component } from 'react'
// import config from './config/config'
import ImageTile from './tile'
import puzzleLordStein from './assets/puzzle_lord.jpeg'
import puzzleLordSchafer from './assets/puzzle_lord_2.jpeg'
import stein1 from './assets/baseball_stein.jpg'
import stein2 from './assets/baseball_stein2.jpg'
import stein3 from './assets/Trans_Fats_Stein.jpg'
import stein4 from './assets/screen_shot2.png'
import stein5 from './assets/screen_shot.png'
import hammond1 from './assets/hat_hammond.jpg'
import ostrander from './assets/ostrander.jpg'

/* TODO:
  - Add animations after correct answer
*/

const code = process.env.REACT_APP_PUZZLE_CODE

const image1 = process.env.REACT_APP_PUZZLE_IMAGES1
const image2 = process.env.REACT_APP_PUZZLE_IMAGES2
const image3 = process.env.REACT_APP_PUZZLE_IMAGES3
const image4 = process.env.REACT_APP_PUZZLE_IMAGES4

class App extends Component {
  constructor () {
    super()
    this.state = {
      codeAccumulation: ''
    }
  }

  callback = (code) => {
    const { codeAccumulation } = this.state
    const newCode = codeAccumulation + code
    this.setState({codeAccumulation: newCode})
  }


  render = () => {
    // const codeValue = process.env.REACT_APP_PUZZLE_ANSWER

    const { codeAccumulation } = this.state

    const title = 'Twitch & Shout'
    return (
      <div className="container">
        <div className="text-center">
          <h1 class>{title}</h1>
        </div>
        { (code === codeAccumulation)
          ? <div className="flex-row">
              <div className="flex-large">
                <ImageTile image={require(`./assets/${image1}`)} callback={() => null}/>
                <ImageTile image={require(`./assets/${image2}`)} callback={() => null}/>
                <ImageTile image={require(`./assets/${image3}`)} callback={() => null}/>
                <ImageTile image={require(`./assets/${image4}`)} callback={() => null}/>
              </div>
            </div>
          : <div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={stein1} callback={() => this.callback('E')}/>
                    <ImageTile image={stein2} callback={() => this.callback('G')}/>
                    <ImageTile image={stein3} callback={() => this.callback('L')}/>
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={hammond1} callback={() => this.callback('H')} />
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Y')} />
                    <ImageTile image={ostrander} callback={() => this.callback('M')} />
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
        }
        
      </div>
    )

  } 

}

export default App