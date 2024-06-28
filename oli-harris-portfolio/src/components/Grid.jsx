import React from 'react'
import './Grid.css'

const images = [
  { id: 1, src: 'https://images.pexels.com/photos/1426421/pexels-photo-1426421.jpeg', alt: 'Timberland' },
  { id: 2, src: 'https://images.pexels.com/photos/216489/pexels-photo-216489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Illy' },
  { id: 3, src: 'https://images.pexels.com/photos/639146/pexels-photo-639146.jpeg', alt: 'Hauser' },
  { id: 4, src: 'https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Venus Makeup' },
];

function Grid() {
  return (
    <div className="image-grid">
            {images.map(image => (
                <div className="image-item" key={image.id}>
                <img src={image.src} alt={image.alt} />
                <div className="image-alt">{image.alt}</div>
            </div>
            ))}
        </div>
  )
}

export default Grid