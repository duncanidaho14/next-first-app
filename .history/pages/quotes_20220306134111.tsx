import React from 'react'
import { getStaticProps } from '.'

export default function quotes(props) {
    console.log(props);
  return (
    <>
       {props.data.map(el => (
           
       ))}
    </>
  )
}

//https://goquotes-api.herokuapp.com/api/v1/random?count=1

export async function getStaticProps() {
    const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    const data = await quote.json()

    return {
        props: {
            data
        }
    }
}