import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <div>
            <BrowserRouter>
              <CartProvider>
                <Navbar />
                <ToastContainer theme="dark"/>
                <Routes>
                  <Route path="/" element={<ItemListContainer greeting={"Todo en materiales de construccion"}/>} />
                  <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                  <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/checkout"element={<Checkout/>}/>
                </Routes>  
              </CartProvider>
            </BrowserRouter>       
        </div>
    )
}

export default App