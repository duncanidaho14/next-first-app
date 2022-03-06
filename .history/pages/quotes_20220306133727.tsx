import React from 'react'
import { getStaticProps } from '.'

export default function quotes() {
  return (
    <div>quotes</div>
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
    )
}