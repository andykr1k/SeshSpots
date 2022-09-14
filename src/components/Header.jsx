import * as React from 'react'
import logo from '../assets/Logo.png'
function Header() {

  return (
    <div className="flex justify-between bg-slate-600 bg-opacity-5 p-5">
        <img className='' src={logo} />
        <h1 className='inline-block align-middle text-3xl font-bold'>SeshStops</h1>
    </div>
  )
}

export default Header
