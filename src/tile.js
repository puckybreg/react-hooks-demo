import React from 'react'

const ImageTile = ({image, callback}) => {


	return (
    <button className='tile-button' onClick={() => {callback()}}>
      <img 
        className='puzzle-image'
        src={image}
        alt='puzzle image' 
      />
    </button>
	)
}

export default ImageTile