import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import '../utils/styles/components.css'

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="kasa's log" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}