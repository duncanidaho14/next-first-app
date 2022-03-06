import React from 'react'
import Image from 'next/image'
import JayJay from '../public/assets/jay-jay-okocha-okocha.gif'

export default function galery() {
    return (
        <>
            <div>
                <Image layout='responsive' src={JayJay} width="400px" height="400px" />
            </div>
        </>
    )
}