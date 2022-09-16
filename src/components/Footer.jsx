import whiteLogo from '../assets/logo-white.svg'
import '../utils/styles/components.css'

export default function Footer() {
    return (
        <footer>
            <img src={whiteLogo} alt="kasa's logo in white" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}