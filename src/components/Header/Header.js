import './Header.scss'
// import logo from "./"
// import { Link, NavLink } from "react-router-dom"

const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="headerLOGO">
                    <img src={LOGOHERE} alt="instock logo" />
                </Link>

            <div className="NAV BUTTONZ">
                <NavLink to="/warehouses" className="">
                    WAREHOUSES
                </NavLink>

                <NavLink to="/inventory" className="">
                    INVENTORY
                </NavLink>
            </div>
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