import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id={style.nav}>
        <Link to="/">Createuser</Link>
        <Link to="/users">Users</Link>
    </div>
  )
}

export default Navbar