import React from 'react'

const ImageTile = ({image, callback}) => {


	return (
    <button className='tile-button' onClick={() => {callback()}}>
      <img 
        src={image} 
        alt='puzzle image' 
      />
    </button>
	)
}

export default ImageTile