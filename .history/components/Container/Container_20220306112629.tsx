import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Container(props.children) {
  return (
      <>
          <Navbar />
          {props.children}
      </>
  )
}
