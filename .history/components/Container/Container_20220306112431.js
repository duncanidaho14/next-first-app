import React from 'react'

export default function Container({children}) {
  return (
      <>
          <Navbar />
          {children}
      </>
  )
}
