import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/product.actions";
import guitar from "../../assets/images/unsplash_TVgcpjm7jxc.png";
import Spinner from "../../shared/Spinner";
const Search = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const queries = new URLSearchParams(location.search);
    useEffect(() => {
        dispatch(
            getProducts({
                q: queries.has("q") ? queries.get("q") : "",
                category: queries.has("category")
                    ? queries.get("category")
                    : "",
            })
        );
    }, [queries.get("q")]);
    const { isLoading, products } = useSelector((state) => {
        return state.productReducers;
    });

    return isLoading ? (
        <Spinner />
    ) : (
      <div>
        <div className="">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold">Customers also bought</h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <Link
                            className="bg-white rounded-3xl drop-shadow-2xl p-4 h-[28rem] flex flex-col gap-6 "
                            key={product._id}
                            to={`/products/${product.slug}`}
                        >
                            <img
                                src={product.image}
                                alt={product.imageAlt}
                                className="w-full h-3/5 object-contain transform  hover:scale-90 transition-all ease-out duration-300"
                            />

                            <h3 className="text-sm font-medium h-1/5 ">
                                {product.title}
                            </h3>

                            <div className="h-1/5 flex justify-center items-center gap-8 mt-auto">
                                <p className=" text-lg font-semibold ">
                                    {product.price}$
                                </p>
                                <div className="">
                                    <button
                                        to={`/products/${product.slug}`}
                                        className="  bg-purple-blue text-white px-3 py-1 rounded-2xl"
                                    >
                                        Add to cart
                                        <span className="sr-only">
                                            , {product.name}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
  </div>
    );
};

export default Search;
