import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} />
      <h2 className="item-title">{product.name}</h2>
      <p className="item-price">Precio: ${product.price}</p>
      <Link to={ "/detail/" + product.id } className="link-item">Ver detalles</Link>
    </div>       
  )
}

export default Item
