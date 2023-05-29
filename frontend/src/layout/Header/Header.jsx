import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="header">
        <img src="https://preview.colorlib.com/theme/manup/img/logo.png" alt="" />

        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="add">Add</Link>
          </li>
          <li>
            <Link to="wishlist">Wishlist</Link>
          </li>
        </ul>

        <button>Ticket</button>
    </div>
    </>
  )
}

export default Header