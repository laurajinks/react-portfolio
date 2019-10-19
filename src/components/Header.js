import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
      <Link to={'/about'}>About</Link>
      <Link to={'/portfolio'}>Portfolio</Link>
      <Link to={'/contact'}>Contact</Link>
    </Fragment>
  )
}

export default Header
