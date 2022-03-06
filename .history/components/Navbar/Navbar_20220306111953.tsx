import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Link href="/">
        <a>Accueil</a>
        </Link>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <Link href="/galery">
            <a>Galery</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </nav>
  )
}
