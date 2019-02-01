import React from 'react'

const ImageTile = ({image, callback}) => {


	return (
    <button className='tile-button'>
      <img 
        src={image} 
        alt='puzzle image' 
        onClick={() => {
          console.log("Hello Jonah")
          callback()
        }}
      />
    </button>
	)
}

export default ImageTile