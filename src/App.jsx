import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
    return (
        <>
        <Navbar />
        <ItemListContainer greeting={'Todo en materiales de construccion'} />
        </>
    )
}

export default App