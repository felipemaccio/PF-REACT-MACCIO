import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart-div">
      {
        cart.map((productCart) => (
          <div key={productCart.id}>
            <div className="cart-product">
              <img src={productCart.image} alt="" />
              <p>{productCart.name}</p>
              <p>Precio c/u: {productCart.price}</p>
              <p>Cantidad: {productCart.quantity}</p>
              <p>Precio parcial: {productCart.quantity * productCart.price}</p>
              <button onClick={() => deleteProductById(productCart.id)}>Eliminar producto</button>
            </div>
          </div>
        ))
      }

      <div>
        <p className="cart-total">Precio total: {totalPrice()}</p>
      </div>

      <div className="checkout-div">
        <button className="cart-clear-button" onClick={deleteCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="cart-checkout-button">Continuar con mi compra</Link>
      </div>
    </div>
  )
}
export default Cart
