import { useOutletContext, useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'
import '../utils/styles/Detail.css'
import Tag from '../components/Tag'

export default function Detail() {
    let { id } = useParams();

    const { data } = useOutletContext();
    const { title, pictures, description, host, rating, location, equipments, tags } = data[id];

    return (
        <section>
            <Slider 
                imageUrls={pictures}
                title={title}
            />
            <div className="accommodation-info">
                <div>
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map(item => <Tag>{item}</Tag>)}
                    </div>
                </div>
                <div>
                    <div className="host-info">
                        <span>{host.name}</span>
                        <img src={host.picture} alt="avatar of the host" />
                    </div>
                    <div className="star-rating">

                    </div>
                </div>
            </div>
            <div className="dropdown-container">
                <Dropdown title="Description" style={{width: '36em'}}>
                    {description}
                </Dropdown>
                <Dropdown title="Équipements" style={{width: '36em'}}>
                    <ul>
                        {equipments.map(item => <li>{item}</li>)}
                    </ul>
                </Dropdown>
            </div>
        </section>
    )
}