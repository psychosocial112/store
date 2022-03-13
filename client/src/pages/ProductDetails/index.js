import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import  {useEffect} from 'react';
import { getProduct } from '../../actions/product.actions';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { slug } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
		dispatch(getProduct(slug))
	}, []);
    const product  = useSelector((state) => {
		return state.productReducers.product;
	});
    console.log(product?._id)
  return (
    <div className='container mx-auto p-20'>
        
        <div className="w-full flex items-center bg-white rounded-3xl shadow-2xl p-4 gap-8 ">
            
                <img
                    src={product?.image}
                    alt={product?.imageAlt}
                    className=" h-96 w-2/5 max-w-xs rounded-lg  object-contain"
                />
            
            <div className="space-y-10 w-3/5 ">
                <h3 className="text-sm font-medium ">
                    {product?.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product?.description}</p>
                <div className='space-y-6'>
                    <p className=" text-lg font-semibold ">
                        Price: {product?.price}$
                    </p>
                    <button
                        to={`/products/${product?.slug}`}
                        className=" bg-purple-blue text-white px-3 py-1 rounded-2xl">
                        Add to cart<span className="sr-only">, {product?.name}</span>
                    </button>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ProductDetail