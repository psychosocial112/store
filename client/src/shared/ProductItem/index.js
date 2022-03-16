import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cart.actions";
const ProductItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.authReducers);
    return (
        <div>
            <div
                className="bg-white rounded-3xl drop-shadow-2xl p-4 h-[28rem] flex flex-col  "
                key={product._id}
            >
                <Link to={`/products/${product.slug}`}
                    className="h-2/3">
                    <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-4/5 object-contain transform  hover:scale-90 transition-all ease-out duration-300"
                    />

                    <h3 className="text-sm font-medium h-1/5 mt-4 ">
                        {product.title}
                    </h3>
                </Link>
                <div className="h-1/3 flex justify-center items-center gap-8 mt-auto">
                    <p className=" text-lg font-semibold ">{product.price}$</p>
                    <div className="">
                        <button
                            onClick={() => {
						if (isAuthenticated) {
							dispatch(
								addToCart({
									product: product._id,
									price: product.price,
									quantity: 1,
								})
							);
						} else {
							navigate("/login");
						}
					}}
                            className="  bg-purple-blue text-white px-3 py-1 rounded-2xl"
                        >
                            Add to cart
                            <span className="sr-only">, {product.name}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
