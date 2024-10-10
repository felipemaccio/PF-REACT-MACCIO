import "./navbar.css"
import logo from '../CartWidget/assets/logo corralon sur.png'; 
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
        <img src={logo} alt="Shop Logo" className="navbar-logo" />
        <button className="button-navbar">Construccion</button>
        <button className="button-navbar">Pintureria</button>
        <button className="button-navbar">Sanitaria</button>
        <button className="button-navbar">Aberturas</button>
        <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar
