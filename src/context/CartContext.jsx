import { createContext, useState } from "react";

const cartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        const tempCart = [...cart]
        const indexProduct = cart.findIndex((productCart)=> productCart.id === newProduct.id)

        if(indexProduct >= 0){
            tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity

            setCart(tempCart)
        }else{
            setCart( [ ...cart, newProduct ] ) 
        }
    }

    const deleteProductById = (idProduct) => {
        const productFilter = cart.filter( (productCart)=> productCart.id !== idProduct)
        setCart(productFilter)

    }

    const deleteCart = () => {
        setCart ([])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=> total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart)=> total + ( productCart.quantity * productCart.price), 0 )
        return price 
    }

    return(
        <cartContext.Provider value={ {cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart} }>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider}