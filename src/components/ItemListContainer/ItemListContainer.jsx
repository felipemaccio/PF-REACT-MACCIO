import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer">
        <div className="ItemListContainer-container">
            <h1>{greeting}</h1>
        </div>
    </div>
  )
}

export default ItemListContainer
