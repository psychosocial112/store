import logo from "../../assets/images/main-logo.svg";
import search from "../../assets/images/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import React, { useState, Fragment, useEffect } from "react";
import { getOwnedCart } from "../../actions/cart.actions";
import { logout } from "../../actions/auth.actions";


const Header = () => {
    const [Query, setQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useSelector((state) => state.authReducers);
    const { items } = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch();
    const goToSearch = (e) => {
        let queryString = "";
        const regex = /q=.*$/i;
        if (location.search.search("q=") !== -1) {
            queryString = location.search.replace(regex, `q=${Query}`);
        } else {
            queryString += location.search
                ? location.search
                : "?" + `&q=${Query}`;
        }
        navigate(`/search${queryString}`);
    };

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getOwnedCart());
        }
    }, [isAuthenticated]);
    const getNumberOfItems = (items) => {
        let sum = 0;
        items.forEach((element) => {
            sum += element.quantity;
        });
        return sum;
    };

    return (
        <div className="font-roboto">
            <header>
                <nav className="bg-purple-blue flex h-16 gap-14 items-center justify-center">
                    <img src={logo} alt="logo" />
                    <div className="w-1/4 flex">
                        <input
                            value={Query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="w-full bg-white h-8 px-4 outline-none rounded-2xl"
                            type="text"
                        />
                        <button
                            onClick={(e) => goToSearch(e)}
                            className="-ml-7 "
                        >
                            <img src={search} alt="" />
                        </button>
                    </div>
                    <div className="flex gap-10 text-white">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/categories"}>Category</Link>
                        <button>About us</button>
                        <button>Help</button>
                    </div>
                    {isAuthenticated ? (
                        <Fragment>
                            <Link
                                to={"/cart"}
                                className=" bg-white text-purple-blue px-3 py-1 rounded-2xl flex relative"
                            >
                                Cart{" "}
                                <span>
                                    <i className="fas fa-shopping-cart"></i>
                                </span>
                                <span className="bg-red-200 rounded-full font-bold px-1.5 py-0.5 right-0 absolute text-xs">
                                    {items ? getNumberOfItems(items) : 0}
                                </span>
                            </Link>
                            <button
                                onClick={() => dispatch(logout())}
                                className="bg-white text-purple-blue px-3 py-1 rounded-2xl"
                            >
                                logout
                            </button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link
                                to={"/login"}
                                className="bg-white text-purple-blue px-3 py-1 rounded-2xl"
                            >
                                Login/Sign up
                            </Link>
                        </Fragment>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default Header;
