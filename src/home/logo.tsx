import React from 'react'
import logo from '../images/logo.png'

export const Logo = () => {
  return (
    <div className="container has-text-centered">
      <h1 className="title">CSGO Demos Manager</h1>
      <img src={logo} alt="CSGO Demos Manager" />
    </div>
  )
}
