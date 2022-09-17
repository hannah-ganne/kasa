import downArrow from '../assets/arrow-down.svg'
import '../utils/styles/Dropdown.css'
import { useState } from 'react'

export default function Dropdown({ children, title, style }) {
    const [isOpen, setIsOpen] = useState(false);
    let className = "dropdown-info"
    isOpen && (className += " dropdown-animated")
    let btnClassName
    isOpen && (btnClassName = "toggleBtn-animated")

    return (
        <div className="dropdown" style={style}>
            <div className="dropdown-title">
                <span>{title}</span>
                <button className={btnClassName} onClick={() => setIsOpen(prev => !prev)} >
                    <img src={downArrow} alt="white arrow pointing up" />
                </button>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}