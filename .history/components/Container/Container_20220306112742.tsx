import React from 'react'
import Navbar from '../Navbar.js/Navbar'

export default function Container({children}) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}