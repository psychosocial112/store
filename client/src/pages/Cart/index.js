import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart, getOwnedCart } from "../../actions/cart.actions";
import Spinner from "../../shared/Spinner";

const Cart = () => {
    const { items, isLoading, totalPrice, totalPriceWithTax, taxPercentage } =
        useSelector((state) => state.cartReducers);
    const { isAuthenticated } = useSelector((state) => state.authReducers);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getOwnedCart());
        }
    }, [isAuthenticated]);
    return isLoading ? (
        <Spinner />
    ) : (
        <div>
            <div>
                {items.length > 0 &&
                    items.map((product) => (
                        <div
                            key={product.product._id}
                            className="flex items-center bg-white rounded-3xl shadow-2xl h-40 w-1/2 mt-5 ml-5 gap-6"
                        >
                            <img
                                className="w-1/6 h-32 ml-5 rounded-lg object-contain "
                                src={product.product.image}
                                alt=""
                            />

                            <Link to={`/products/${product.product.slug}`}>
                                <h3>{product.product.title}</h3>
                            </Link>

                            <div className="flex items-center ">
                                <button className="bg-purple-blue rounded-full h-4 w-4 ">
                                    -
                                </button>
                                <input
                                    className="w-16 appearance-none mx-3 outline-none border-solid border rounded-2xl px-2"
                                    type="number"
                                />
                                <button>+</button>
                            </div>
                            <p>{product.price} $</p>
                        </div>
                    ))}
            </div>
            <div>
                <h2>Checkout </h2>
            </div>
        </div>
    );
};

export default Cart;
