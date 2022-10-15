import * as React from "react";
import { Link } from "react-router-dom";
import { login_image } from "../../constants/images";

interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
    return (
        <div className="min-h-screen bg-gray-100 w-full flex justify-center items-center">
            <div className="bg-white w-2/3 shadow-md p-5 rounded-md grid grid-cols-12 gap-3">
                <div className="col-span-6">
                    <div>
                        <img src={login_image} alt="" />
                    </div>
                </div>
                <div className="col-span-6 my-auto px-6">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <p className="text-gray-600 text-end">
                            Already have account? <br />
                            <Link
                                className="text-blue-500 font-semibold"
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="emailField"
                                className="text-base text-slate-600 font-medium"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                className="border outline-none px-4 py-2 rounded-full focus:border-blue-400"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="emailField"
                                className="text-base text-slate-600 font-medium"
                            >
                                Your Password
                            </label>
                            <input
                                type="password"
                                className="border outline-none px-4 py-2 rounded-full focus:border-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="text-end">
                            <Link
                                to="/forgot-password"
                                className="my-2 text-blue-500 w-fit"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="bg-blue-500 px-4 py-2 rounded-full text-white w-3/4 mx-auto">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
