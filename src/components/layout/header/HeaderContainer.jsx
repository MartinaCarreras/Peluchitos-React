import React from 'react'
import { Header } from './Header'
import { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '../../../context/headerContext'



export const HeaderContainer = () => {
    const { actMenu, actHamb, setActWidth, dones, width, fullHamb, changeToFullHamb } = useContext( HeaderContext )
    const [ doneCont, setDoneCont ] = useState(false);
    const [ doneBlog, setDoneBlog ] = useState(false);
    const [ doneCotiz, setDoneCotiz ] = useState(false);
    const [ doneProd, setDoneProd ] = useState(false);

    useEffect(()=> {
        window.addEventListener('resize', setActWidth);
        dones( doneCont, 740, setDoneCont, width );
        doneCont && dones( doneBlog, 645, setDoneBlog, width );
        doneBlog && dones( doneCotiz, 576, setDoneCotiz, width );
        doneCotiz && dones( doneProd, 430, setDoneProd, width );

    },[ width, doneCont, doneBlog, doneCotiz, doneProd, fullHamb ]);
    
    return (
        <Header
            menu={actMenu}
            hamb={actHamb}
            fullHamb={fullHamb}
            changeTo={changeToFullHamb}
        />
    )
}
