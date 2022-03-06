import Link from 'next/link';
import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function index(props) {
    console.log(props.array.forEach(item => (console.log(Object.keys(item)[0]))));
    return (
        <div className='container'>
            <h1 className='my-4'>Les liste de vocabulaire</h1>
            <ul className='list-group'>
                {props.array.map(item => (
                    <li key={uuidv4()} className="list-group-item">
                        <Link href={Object.keys(item)[0]}>
                            <a>{Object.keys(item)[0]}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    
}