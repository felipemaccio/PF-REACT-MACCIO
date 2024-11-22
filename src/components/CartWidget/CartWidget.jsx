import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

const CartWidget = () => {
  const {totalQuantity} = useContext(cartContext)

  const total = totalQuantity()


  return (
    <Link to="/cart" className="seeCarrito">
      <img src={cart} alt="cart-widget" />
      <p>{total >= 1 && total }</p>
    </Link>
  )
}

export default CartWidget
