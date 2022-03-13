import React from 'react'
import guitar from '../../assets/images/unsplash_TVgcpjm7jxc.png'

const Cart = () => {
  return (
    <div>
        <div className='flex items-center bg-white rounded-3xl shadow-2xl h-40 w-1/2 mt-5 ml-5 gap-6'>
            <img className='w-1/6 h-32 ml-5 rounded-lg object-cover ' src={guitar} alt="" />
            <div>
                <h3>Gibson</h3>
                <p>short description</p>
            </div>
            <div className='flex items-center '>
                <button className='bg-purple-blue rounded-full h-4 w-4 '>-</button>
                <input className='w-16 appearance-none mx-3 outline-none border-solid border rounded-2xl px-2' type="number" />
                <button>+</button>
            </div>
            <p>16500$</p>
        </div>
    </div>
  )
}

export default Cart