import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/product.actions";
import ProductItem from "../../shared/ProductItem";
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
                        {products.length > 0 &&
                            products.map((product) => (
                                <ProductItem
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
