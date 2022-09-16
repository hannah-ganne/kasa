import '../utils/styles/Thumb.css'

export default function Thumb({ imageUrl, title, index }) {
    return (
            <div className="thumb">
                <img src={imageUrl} alt={`picture of the accomodation ${title}`} />
                <h3>{title}</h3>
            </div>

    )
}