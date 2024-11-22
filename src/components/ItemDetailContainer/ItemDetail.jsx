import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./ItemDetail.css"


const ItemDetail = ({product}) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const {addProductInCart} = useContext(cartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count}
        addProductInCart(productCart)
        setShowItemCount(false)
    }

    return (
        <div className="item-detail">
            <img src={product.image} alt="" width={600}/>
            <div className="text-detail-container">
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">{product.description}</p>
                <p className="text-detail">Precio: ${product.price}</p>

                {
                    showItemCount === true ?
                    (<ItemCount stock={product.stock} addProduct={addProduct} />)
                    :
                    ( <Link to="/cart" className="finish-buy-buttom">Terminar mi compra </Link> )
                }
            </div>
       </div>
    )      
}
export default ItemDetail


