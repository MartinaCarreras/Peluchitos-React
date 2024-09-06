import React from 'react'
import { Header } from './Header'
import { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '../../../context/headerContext'



export const HeaderContainer = () => {
    const { actMenu, actHamb, setActWidth, width, changeToFullHamb } = useContext( HeaderContext )
    const [ fullHamb, setFullHamb ] = useState(false);

    useEffect(()=> {
        window.addEventListener('resize', setActWidth);
        width < 430 && setFullHamb(true)
        width >= 430 && setFullHamb(false)
    },[ width ]);
    
    return (
        <Header
            menu={actMenu}
            hamb={actHamb}
            fullHamb={fullHamb}
            changeTo={changeToFullHamb}
        />
    )
}
