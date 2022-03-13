import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth.actions";
import logo from "../../assets/images/main-logo.svg";
import { Link } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => {
        return state.authReducers;
    });
    const [Form, setForm] = useState({
        password: "",
        email: "",
    });
    const onInputChange = (e) => {
        e.preventDefault();
        setForm({ ...Form, [e.target.name]: e.target.value });
    };
    const onSubmitForm = (e) => {
        e.preventDefault();

        dispatch(login(Form));
        setForm({
            email: "",
            password: "",
        });
    };
    return isLoading ? (
        <div>hello loading</div>
    ) : (
        <div className=" container mx-auto w-1/2">
            <div className="flex flex-col justify-center items-center p-12  mt-16 bg-white rounded-3xl shadow-2xl gap-6 font-roboto ">
                <img className=" bg-purple-blue" src={logo} alt="logo" />
                <h3>Personal Information</h3>

                <form
                    className="flex flex-col justify-center w-full gap-6  "
                    onSubmit={(e) => onSubmitForm(e)}
                >
                    <div className="flex flex-col w-2/3 mx-auto ">
                        <label className=" p-3" htmlFor="email">
                            Email address
                        </label>

                        <input
                            required
                            onChange={(e) => onInputChange(e)}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className=" outline-none border-solid border rounded-2xl px-2 h-8  "
                        />
                    </div>
                    <div className="flex flex-col w-2/3 mx-auto">
                        <label className=" p-3" htmlFor="password">
                            Password
                        </label>

                        <input
                            required
                            onChange={(e) => onInputChange(e)}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="outline-none border-solid border rounded-2xl px-2 h-8  "
                        />
                    </div>
                    <button
                        className="bg-purple-blue text-white mx-auto w-36 px-4 py-1 rounded-2xl"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className="mx-auto">
                        Don't have an account?{" "}
                        <Link
                            className=" underline text-purple-blue"
                            to={"/register"}
                        >
                            Sign up
                        </Link>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
