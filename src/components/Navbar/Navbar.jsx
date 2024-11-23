import "./Navbar.css"
import logo from "../../assets/logo corralon sur.png"; 
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
        <nav className="navbar">
        <Link to="/">
        <img src={logo} alt="Shop Logo" className="navbar-logo" />
        </Link>
        <li className="li-navbar"><Link to= "/category/construccion" className="link-custom">Construccion</Link></li>
        <li className="li-navbar"><Link to= "/category/ferreteria" className="link-custom">Ferreteria</Link></li>
        <li className="li-navbar"><Link to= "/category/pintureria" className="link-custom">Pintureria</Link></li>
        <li className="li-navbar"><Link to= "/category/sanitaria" className="link-custom"> Sanitaria</Link></li>
        <CartWidget/>
        </nav>
    </nav>
  )
}

export default Navbar
