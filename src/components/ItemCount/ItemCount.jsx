import { useState } from "react"
import "./ItemCount.css";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickSubtract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }


    return (
        <div className="item-count">
            <button className="subtract-button" onClick={handleClickSubtract}>-</button>
            <p>{count}</p>
            <button className="add-button" onClick={handleClickAdd}>+</button>
            <button className="add-to-cart-button" onClick={() => addProduct(count)}>
                Agregar producto al carrito
            </button>
        </div>
    )
}
export default ItemCount