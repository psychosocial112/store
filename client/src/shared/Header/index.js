import React from 'react'
import logo from '../../assets/images/main-logo.svg'
import cart from '../../assets/images/Cart.svg'
import search from '../../assets/images/search.svg'
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className='font-roboto'>
      <header>
        <nav className='bg-purple-blue flex h-16 gap-14 items-center justify-center'  >
              <img src={ logo } alt="logo" />
              <div className='w-1/4 flex'>
                <input placeholder='Search...' className='w-full bg-white h-8 px-4 outline-none rounded-2xl' type="text" />
                <button className='-ml-7 '><img src={search} alt="" /></button>
              </div>
              <div className='flex gap-10 text-white'>
              <Link to={'/'}>Home</Link>
              <button>Category</button>
              <button>About us</button>
              <button>Help</button>
              </div>

              <button className=' bg-white text-purple-blue px-3 py-1 rounded-2xl flex'>Cart <span><img src={cart} alt="cart" /></span></button>
              <Link to={"/login"} className='bg-white text-purple-blue px-3 py-1 rounded-2xl'>Login/Sign up</Link>
          </nav>
      </header>
    </div>
  )
}

export default header