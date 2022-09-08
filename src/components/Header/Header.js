import './Header.scss'
import logo from "/Users/never_lackin/Desktop/timbits-instock/src/assets/InStock-Logo_2x.png"

import { Link, NavLink } from "react-router-dom"


const Header = () => {

    return (
        <header className='header'>
            <Link to="/" className='header__link'>
                <img className='header__logo' src={logo} alt='instock logo' />
            </Link>
            <nav className='header__nav'>
                <NavLink to="/warehouses" className="header__navlink">
                    WAREHOUSES
                </NavLink>

                <NavLink to="/inventory" className="header__navlink">
                    INVENTORY
                </NavLink>
            </nav>
        </header>
    )
    // MAKE CLASS FOR ACTIVE LINK!!!!
    // navbar 
    // logo link
    // warehouses aspect left (buttons)
    // inventory aspect right (buttons)

}

export default Header