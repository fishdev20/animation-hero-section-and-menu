import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.scss'

const Menu = ({ active, setActive,mode }) => {
    const location = useLocation()

    useEffect(() => {
        setActive(false)
    }, [location])

    return (
        <ul className={`menu ${active ? 'active' : ''} ${mode ? 'light' : ''}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Menu