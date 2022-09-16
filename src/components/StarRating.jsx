import filledStar from '../assets/star-filled.svg'
import emptyStar from '../assets/star-empty.svg'
import '../utils/styles/components.css'

export default function StarRating({ rating }) {

    const starArray = [0, 0, 0, 0, 0]
    starArray.fill(1, 0, rating)

    return (
        <div className="stars-container">
            {starArray.map((item, index) => {
                if (item === 1) {
                    return <img key={index} src={filledStar} alt="filled star" /> 
                } else {
                    return <img key={index} src={emptyStar} alt="empty star" />
                }
            })}
        </div>
    )
}