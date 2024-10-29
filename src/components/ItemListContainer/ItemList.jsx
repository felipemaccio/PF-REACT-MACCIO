import Item from "./Item"
import './ItemList.css';


const ItemList = ({products}) => {
  return (
    <div className="flex-container">
      {
        products.map( (product) => (
          <Item product={product} key={product.id} />
        ))   
      }
    </div>
  )
}
export default ItemList

