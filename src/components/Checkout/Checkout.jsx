import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./Checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(cartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }

    const response = await validateForm(dataForm)
    if (response.status === "success"){
      uploadOrder(order)
    }else{
      toast.error(response.message)
    }
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id)
      })
      .finally(()=>{
        deleteCart()
        toast.success("Orden generada correctamente!")
      })
  }


  return (
    <div className="checkout-container">
      {
        idOrder === null ? (
          <form onSubmit={handleSubmitForm} className="checkout-form">
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="nombre..." />
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="telefono..." />
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="email..." />
            <button type="submit">Terminar mi compra</button>
          </form>
        ) : (
          <div className="checkout-success">
            <h2>Orden generada correctamente!</h2>
            <p>Numero de orden: {idOrder}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        )
      }

    </div>
  )
}

export default Checkout
