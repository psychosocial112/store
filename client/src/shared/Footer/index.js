import React from 'react'
import logo from '../../assets/images/main-logo.svg'
import facebook from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'

const Footer = () => {
  return (
    <div className='p-8  flex items-center justify-center gap-20 bg-purple-blue font-roboto text-white mt-16'>
      <div className=' w-80'>
        <img  src={ logo } alt="" />
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam velit perferendis asperiores dolore consequuntur veniam ex qui. Quis, ipsa</p>
      </div>
      <div className='flex flex-col items-start'>
        <button>Home</button>
        <button>Category</button>
        <button>About us</button>
        <button>Help</button>
      </div>
      <div className=' flex flex-col items-start'>
        <button>Prvacy & Policy</button>
        <button>Terms & Conditions</button>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h3 className=''>Contact us</h3>
        <div className='flex gap-4'>
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  )
}

export default Footer