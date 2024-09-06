import { createContext, useState } from 'react'

export const HeaderContext = createContext()  //Creo el contexto del menu

const menu = [
    {key: "1", path: "/productos", title: "Productos", id: 'prod-menu'},
    {key: "2", path: "/productos", title: "Cotización", id: 'cotiz-menu'},
    {key: "3", path: "/productos", title: "Blog", id: 'blog-menu'},
    {key: "4", path: "/productos", title: "Contacto", id: 'cont-menu'}
]
const hamb = [
    {key: "1", path: "/productos", title: "Productos", id: 'prod-hamb'},
    {key: "2", path: "/productos", title: "Cotización", id: 'cotiz-hamb'},
    {key: "3", path: "/productos", title: "Blog", id: 'blog-hamb'},
    {key: "4", path: "/productos", title: "Contacto", id: 'cont-hamb'}
]

const HeaderContextProvider = ( { children } ) => {
    const [actMenu, setActMenu] = useState(menu);  //Li de menu
    const [actHamb, setActHamb] = useState(hamb);  //Li del menu hamburguesa
    const [ width, setWidth ] = useState(window.innerWidth)  // tamaño de la pantalla
    const [ showHamb, setShowHamb ] = useState(false); // Para mostrar el menu completo

    const setActWidth = () => {  //Función para actualizar el width
        setWidth( window.innerWidth )
    }
    const changeToFullHamb = () => {
        width < 430 && setShowHamb(!showHamb)
    }

    return <HeaderContext.Provider value={{ actMenu, actHamb, setActWidth, width, showHamb, changeToFullHamb }} >
        { children }
    </HeaderContext.Provider>
}

export default HeaderContextProvider