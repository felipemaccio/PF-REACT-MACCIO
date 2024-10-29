
const products = [
    {
        id: "CR100",
        name: "CIELORRASO",
        descripcion: "",
        price: 1500,
        stock: "",
        image: "/img/construccion/cielorraso.webp",
        category: "construccion"
    },
    {
        id: "LDC100",
        name: "LADRILLO DE CAMPO",
        descripcion: "",
        price: 1600,
        stock: "",
        image: "/img/construccion/ladrillos.webp",
        category: "construccion"
    }, 
    {
        id: "H100",
        name: "HORMIGONERA",
        descripcion: "",
        price: 1700,
        stock: "",
        image: "/img/construccion/Hormigonera.webp",
        category: "construccion"
    }, 
    {
        id: "MA100",
        name: "MEMBRANA ASFALTICA",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/construccion/Membrana asfaltica.webp",
        category: "construccion"
    },
    {
        id: "CH100",
        name: "CAJA HERRAMIENTAS",
        descripcion: "",
        price: 1500,
        stock: "",
        image: "/img/ferreteria/caja herramientas.webp",
        category: "ferreteria"
    },
    {
        id: "E100",
        name: "ESCALERA",
        descripcion: "",
        price: 1600,
        stock: "",
        image: "/img/ferreteria/escalera.webp",
        category: "ferreteria"
    }, 
    {
        id: "MN100",
        name: "MOTOSIERRA NAFTA",
        descripcion: "",
        price: 1700,
        stock: "",
        image: "/img/ferreteria/motosierra nafta.webp",
        category: "ferreteria"
    }, 
    {
        id: "KLA100",
        name: "KIT LLAVES ALLEN",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/ferreteria/Juego allen.webp",
        category: "ferreteria"
    },
    {
        id: "ICRA100",
        name: "INCA CIELOS RASOS ANTIHONGOS",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/pintureria/inca-cielos-rasos-antihongos-20.webp",
        category: "pintureria"
    }, 
    {
        id: "T100",
        name: "INCALEX TOQUE SUBLIME SEMI MATE BLANCO",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/pintureria/incalex-toque-sublime-semi-mate-blanco-20lt.webp",
        category: "pintureria"
    },
    {
        id: "ITS100",
        name: "INCALEX TOQUE SUBLIME",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/pintureria/Incalex-toque-sublime.png",
        category: "pintureria"
    },
    {
        id: "I100",
        name: "INCAMUR",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/pintureria/Incamur-4-lts.webp",
        category: "pintureria"
    },
    {
        id: "KTCF100",
        name: "KL-TE CRM FUSION 20MM X 12",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/sanitaria/KL-TE CRM FUSION 20MM X 12.webp",
        category: "sanitaria"
    }, 
    {
        id: "KUSF100",
        name: "KL UNION SIMPLE FUSION 25MM",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/sanitaria/KL-UNION SIMPLE FUSION 25MM.jpg",
        category: "sanitaria"
    },
    {
        id: "PRPD100",
        name: "PVC RECEPTACULO PARA DUCHA",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/sanitaria/PVC RECEPTACULO PARA DUCHA.webp",
        category: "sanitaria"
    },
    {
        id: "IBAPC100",
        name: "IR1 BOCA ACC. 63 X 50 P COCINA T PLASTICO",
        descripcion: "",
        price: 1800,
        stock: "",
        image: "/img/sanitaria/R1-BOCA ACC. 63 X 50 P COCINA T PLÁSTICO.webp",
        category: "sanitaria"
    },

]

const getProducts = () => {
    return new Promise((resolve, reject)=>{
      resolve(products)
    })
  }

export {getProducts}