import React from 'react'
import {  useLocation } from 'react-router-dom'
import { getProducts } from "../../actions/product.actions";
import guitar from '../../assets/images/unsplash_TVgcpjm7jxc.png'

const Search = () => {
  const location = useLocation()
  const queries = new URLSearchParams(location.search)
  
  return (
    <div>
      <div className='flex bg-white rounded-3xl drop-shadow-2xl w-2/5 h-48 p-4 gap-4 mt-16'>
        <img className='object-cover rounded-2xl' src={guitar} alt="" />
        <div>
          <div>
            <h3>title</h3>
            <p>short description</p>
          </div>
          <div className=''>
            <p>1665$</p>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search