import logo from "../../assets/images/main-logo.svg";
import cart from "../../assets/images/Cart.svg";
import search from "../../assets/images/search.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
    const navigation = [{ name: "categories", to: "/categories" }];
    const [Query, setQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    function goToSearch(e) {
        const queries = new URLSearchParams(location.search);
        let queryString = "?";
        for (const key of queries.keys()) {
            queryString += key + "=" + queries.get(key) + "&";
        }
        navigate(`/search${queryString}q=${Query}`);
    }

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
                    <Link
                        to={"/cart"}
                        className=" bg-white text-purple-blue px-3 py-1 rounded-2xl flex"
                    >
                        Cart{" "}
                        <span>
                            <img src={cart} alt="cart" />
                        </span>
                    </Link>
                    <Link
                        to={"/login"}
                        className="bg-white text-purple-blue px-3 py-1 rounded-2xl"
                    >
                        Login/Sign up
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;
