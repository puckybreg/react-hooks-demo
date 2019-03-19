import React from 'react'
import trigger from './assets/screen_shot2.png'

const ImageTile = ({image, callback}) => {


	return (
    <button className='tile-button' onClick={() => {callback()}}>
      <img 
        className='puzzle-image'
        // src='./assets/screen_shot2.png'
        src={trigger}
        alt='puzzle image' 
      />
    </button>
	)
}

export default ImageTile