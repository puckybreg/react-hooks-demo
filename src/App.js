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
import stien1 from './assets/stien1.jpg'
import stien2 from './assets/stien2.jpg'
import stien3 from './assets/stien3.jpg'
import stien4 from './assets/stien4.jpg'

/* TODO:
  - Add new photos of stein
  - Add animations after correct answer
  - Add an enviroment and config set up

*/

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
      <div className="container">
        <h1>Puzzle Palooza</h1>
        { (code === codeAccumulation)
          ? <div className="flex-row">
              <div className="flex-large">
                <div>{codeValue}</div>
                <ImageTile image={"./assets/stien1.jpg"} callback={() => null}/>
                <ImageTile image={process.env.REACT_APP_PUZZLE_IMAGE2} callback={() => null}/>
                <ImageTile image={process.env.REACT_APP_PUZZLE_IMAGE3} callback={() => null}/>
                <ImageTile image={process.env.REACT_APP_PUZZLE_IMAGE4} callback={() => null}/>
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
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Z')} />
                    <ImageTile image={stein5} callback={() => this.callback('X')} />
                    <ImageTile image={stein4} callback={() => this.callback('Y')} />
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Q')} />
                    <ImageTile image={stein5} callback={() => this.callback('U')} />
                    <ImageTile image={stein4} callback={() => this.callback('S')} />
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={stein2} callback={() => this.callback('I')} />
                    <ImageTile image={stein5} callback={() => this.callback('J')} />
                    <ImageTile image={stein4} callback={() => this.callback('S')} />
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Q')} />
                    <ImageTile image={stein1} callback={() => this.callback('L')} />
                    <ImageTile image={stein4} callback={() => this.callback('S')} />
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('I')} />
                    <ImageTile image={stein4} callback={() => this.callback('M')} />
                    <ImageTile image={stein5} callback={() => this.callback('S')} />
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-large">
                    <ImageTile image={puzzleLordSchafer} callback={() => this.callback('Q')} />
                    <ImageTile image={stein3} callback={() => this.callback('W')} />
                    <ImageTile image={stein4} callback={() => this.callback('S')} />
                  </div>
                </div>
            </div>
        }
        
      </div>
    )

  } 

}

export default App