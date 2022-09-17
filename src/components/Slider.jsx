import leftArrow from '../assets/arrow-left.svg'
import rightArrow from '../assets/arrow-right.svg'
import { useState } from 'react'
import '../utils/styles/Slider.css'

export default function Slider({ imageUrls, title }) {

    const [urls, setUrls] = useState(imageUrls)
    const [imageIndex, setImageIndex] = useState(0);
    const styles = {
        backgroundImage: `url(${urls[imageIndex]})`
    }

    return (
        <div className="slider" style={styles}>
            {/* <img className="cover-image" src={urls[imageIndex]} alt={`picture of the accomodation ${title}`} /> */}
            <button className="leftArrow" onClick={() => {
                imageIndex === 0
                    ? setImageIndex(urls.length-1)
                    : setImageIndex(prev => prev - 1)
            }}>
                <img src={leftArrow} alt="white arrow pointing left" />
            </button>
            <button className="rightArrow" onClick={() => {
                imageIndex === (urls.length - 1)
                    ? setImageIndex(0)
                    : setImageIndex(prev => prev + 1)
            }}>
                <img src={rightArrow} alt="white arrow pointing right" />
            </button>
            <span>{`${imageIndex+1}/${urls.length}`}</span>
        </div>
    )
}