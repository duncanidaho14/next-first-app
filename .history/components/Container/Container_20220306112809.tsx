import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Container({children : string}) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}