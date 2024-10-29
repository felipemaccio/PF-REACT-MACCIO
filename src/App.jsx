import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <div>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Todo en materiales de construccion"}/>} />
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
              </Routes>
            </BrowserRouter>       
        </div>
    )
}

export default App