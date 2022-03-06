import Link from 'next/link';
import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function index(props) {
    console.log(props.array.forEach(item => (console.log(Object.keys(item)[0]))));
    return (
        <div className='container'>
            <h1>Les liste de vocabulaire</h1>
            <ul>
                {props.array.map(item => (
                    <li>
                        <Link href={Object.keys(item)[0]}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
