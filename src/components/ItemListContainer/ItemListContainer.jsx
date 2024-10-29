import "./ItemListContainer.css"
import { getProducts } from "../../Data/data.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect (()=> {
    getProducts()
    .then((dataProducts)=> {
      if(idCategory){
        const productsFilter = dataProducts.filter((product) => product.category === idCategory)
        setProducts(productsFilter) 
      }else{
        setProducts(dataProducts)
      }
    })
    .catch((error)=> {
      console.error(error)
    })
  }, [idCategory])

  return (
    <div className="ItemListContainer">
        <div className="ItemListContainer-container">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    </div>
  )
}   

export default ItemListContainer
