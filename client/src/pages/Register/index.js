import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../../actions/auth.actions";
import logo from "../../assets/images/main-logo.svg";
import Spinner from "../../shared/Spinner";
const Register = () => {
    const dispatch = useDispatch();
    const { isLoading, isAuthenticated} = useSelector((state) => {
        return state.authReducers
    })
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
    if (isAuthenticated) {
		return <Navigate to={"/"} />;
	}
    return isLoading ? (
        <Spinner/>
    ) : (
        <div className=" container mx-auto w-2/3">
            <div className="flex flex-col justify-center items-center p-12 py-16  mt-16 bg-white rounded-3xl shadow-2xl gap-6 font-roboto ">
                <img className=" bg-purple-blue" src={logo} alt="logo" />
                <h3>Please fill the form to register</h3>
                <form
                    className="flex flex-col justify-center w-full px-8 gap-6 "
                    onSubmit={(e) => onSubmitForm(e)}
                >
                    <div className="flex gap-3 w-full">
                        <div className="w-1/2">
                            <label className=" p-3" htmlFor="firstName">
                                First name
                            </label>
                            
                                <input
                                    value={Form.firstName}
                                    required
                                    placeholder="First name"
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full "
                                />
                            
                        </div>
                        <div className="w-1/2">
                            <label className=" p-3" htmlFor="lastName">
                                Last name
                            </label>
        
                                <input
                                    required
                                    placeholder="Last name"
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    value={Form.lastName}
                                    name="lastName"
                                    id="lastName"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full "
                                />
                            
                        </div>
                    </div>
                    <div className="w-full">
                        <label className=" p-3" htmlFor="email">
                            Email address
                        </label>
                        
                            <input
                                value={Form.email}
                                required
                                placeholder="Email address"
                                onChange={(e) => onInputChange(e)}
                                type="text"
                                name="email"
                                id="email"
                                className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full "
                            />
                        
                    </div>
                    <div className="flex gap-3 w-full">
                        <div className="w-1/2">
                            <label className=" p-3" htmlFor="password">
                                Password
                            </label>

                            <input
                                required
                                placeholder="Password"
                                onChange={(e) => onInputChange(e)}
                                type="password"
                                name="password"
                                id="password"
                                className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className=" p-3" htmlFor="confirmPassword">
                                Confirm password
                            </label>

                            <input
                                required
                                placeholder="Confirm password"
                                onChange={(e) => onInputChange(e)}
                                type="Password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3  w-full">
                        <div className="w-1/3">
                            <label className=" p-3" htmlFor="city">
                                City
                            </label>
                            
                                <input
                                    required
                                    placeholder="City"
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    name="city"
                                    id="city"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full"
                                />
                            
                        </div>
                        <div className="w-1/3">
                            <label className=" p-3" htmlFor="street">
                                Street
                            </label>
                            
                                <input
                                    required
                                    placeholder="Street"
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    name="street"
                                    id="street"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full"
                                />
                            
                        </div>
                        <div className="w-1/3">
                            <label className=" p-3" htmlFor="zipCode">
                                ZIP/Postal code
                            </label>
                            
                                <input
                                    required
                                    placeholder="ZIP/Postal code"
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    className=" outline-none border-solid border rounded-2xl px-2 h-8 w-full"
                                />
                            
                        </div>
                    </div>
                    <button
                        className="bg-purple-blue text-white px-4 py-1 rounded-2xl w-28 mx-auto"
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
