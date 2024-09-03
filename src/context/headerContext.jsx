import { createContext, useState } from 'react'

export const HeaderContext = createContext()  //Creo el contexto del menu


const HeaderContextProvider = ( { children } ) => {
    const [actMenu, setActMenu] = useState([{key: "1", path: "/productos", title: "Productos"},{key: "2", path: "/productos", title: "Cotización"},{key: "3", path: "/productos", title: "Blog"},{key: "4", path: "/productos", title: "Contacto"}]);
    const [actHamb, setActHamb] = useState([]);
    const [ width, setWidth ] = useState(window.innerWidth)

    const setActWidth = () => {  //Función para actualizar el width
        setWidth( window.innerWidth )
    }
    const movement = async( arrayFrom, arrayTo, setFrom, setTo ) => { //Función para mover de uno a otro
        const tempFrom = [...arrayFrom];
                
        const tempTo = [...arrayTo];
        tempTo.push(tempFrom.pop());

        await setFrom(tempFrom);
        await setTo(tempTo);        
    }
    const dones = async( done, limit, set, width ) =>  { //  Para saber si mover o no
        if( ( !done && width < limit) ) {
            await movement( actMenu, actHamb, setActMenu, setActHamb );            
            await set(true);
        } else if (width >= limit && done) {
            await movement( actHamb, actMenu, setActHamb, setActMenu );
            await set(false)
        }
        
    }
    const FullHambFunction = async( done ) => {
        if ( width < 430 && !done ) {
            // document.querySelector('.show')
        } else if ( width >= 430 && done) {

        }
    }


    return <HeaderContext.Provider value={{ actMenu, actHamb, setActWidth, dones, width, FullHambFunction }} >
        { children }
    </HeaderContext.Provider>
}

export default HeaderContextProvider