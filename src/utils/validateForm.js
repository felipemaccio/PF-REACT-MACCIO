import { EmailAuthCredential } from "firebase/auth/web-extension";
import { object, string, mixed } from "yup";

let userSchema = object ({
    fullname: string().required("El campo nombre es requerido"),
    phone: mixed().required("El campo telefono es requerido"),
    email: string().email("El campo email no tiene el formato correcto").required("El campo email es requerido")
})

const validateForm = async(dataForm) => {
   try{
    await userSchema.validate(dataForm)
    return { status: "success" }
   }catch(error){
    return { status: "error", message: error.message }
   } 
}

export default validateForm