import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/auth.actions";
import logo from "../../assets/images/main-logo.svg";
const Register = () => {
    const dispatch = useDispatch();
    const [Form, setForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        city: "",
        zipCode: "",
        street: "",
    });

    const onInputChange = (e) => {
        e.preventDefault();
        setForm({ ...Form, [e.target.name]: e.target.value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        dispatch(register(Form));
        setForm({
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
            city: "",
            zipCode: "",
            street: "",
        });
    };
    return (
        <div className=" container mx-auto w-2/3">
            <div className="flex flex-col justify-center items-center py-16  mt-20 bg-white rounded-3xl shadow-2xl gap-6 font-roboto ">
                <img className=" bg-purple-blue" src={logo} alt="logo" />
                <h3>Please fill the form to register</h3>
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="flex gap-3">
                        <div>
                            <label htmlFor="firstName">First name</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last name</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <div>
                            <input
                                required
                                onChange={(e) => onInputChange}
                                type="text"
                                name="email"
                                id="email"
                                className=" outline-none border-solid border rounded-2xl px-2 h-8 w-2/3"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <label htmlFor="password">Password</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Password</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="Password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <label htmlFor="city">City</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="text"
                                    name="city"
                                    id="city"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="street">Street</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="text"
                                    name="street"
                                    id="street"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="zipCode">ZIP / Postal code</label>
                            <div>
                                <input
                                    required
                                    onChange={(e) => onInputChange}
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 "
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-purple-blue text-white px-4 py-1 rounded-2xl"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
