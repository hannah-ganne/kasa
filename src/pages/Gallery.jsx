import Thumb from '../components/Thumb'
import '../utils/styles/Gallery.css'
import { Link, useOutletContext } from 'react-router-dom'

export default function Gallery() {
    const { data } = useOutletContext();

    return (
        <section>
            <div className="main">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery-container">
                {data.map((item, index) =>
                    <Link key={item.id} to={`/${index}`}>
                        <Thumb
                            key={item.id}
                            index={index}
                            title={item.title}
                            imageUrl={item.cover}
                        >
                        </Thumb>
                    </Link>
                    )}
            </div>
        </section>
    )
}