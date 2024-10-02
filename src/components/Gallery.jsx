import React from 'react'
import gallery1 from '../images/gallery-1.png'
import gallery2 from '../images/gallery-2.png'
import gallery3 from '../images/gallery-3.png'


const Gallery = () => {
  return (
    <section className="galeria">
        <div className="galeria_container ">
            <img className="galeria__images"src={gallery1} alt="gallery-1.png"/>
            <img className="galeria__images"src={gallery2} alt="gallery-2.png"/>
            <img className="galeria__images"src={gallery3} alt="gallery-3.png"/>
        </div>
    </section>
  )
}

export default Gallery