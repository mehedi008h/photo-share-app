import * as React from "react";
import { Link } from "react-router-dom";
import { signup_image } from "../../constants/images";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface ISignupProps {}

const Signup: React.FC<ISignupProps> = (props) => {
    // state
    const [showPassword, setShowpassword] = React.useState(false);
    return (
        <div className="min-h-screen bg-gray-100 w-full flex justify-center items-center">
            <div className="bg-white w-2/3 shadow-md p-5 rounded-md grid grid-cols-12 gap-3">
                <div className="col-span-6 my-12 px-6">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold">Sign Up</h1>
                        <p className="text-gray-600 text-end">
                            Already have account? <br />
                            <Link
                                className="text-blue-500 font-semibold"
                                to="/login"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="emailField"
                                className="text-base text-slate-600 font-medium"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="border outline-none px-4 py-2 rounded-full focus:border-blue-400"
                                placeholder="Your name"
                            />
                        </div>
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
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="border w-full outline-none px-4 py-2 rounded-full focus:border-blue-400"
                                    placeholder="Enter your password"
                                />
                                {showPassword ? (
                                    <AiOutlineEyeInvisible
                                        onClick={() =>
                                            setShowpassword(!showPassword)
                                        }
                                        size={20}
                                        className="absolute right-3 bottom-2.5 text-gray-500 hover:text-blue-500"
                                    />
                                ) : (
                                    <AiOutlineEye
                                        onClick={() =>
                                            setShowpassword(!showPassword)
                                        }
                                        size={20}
                                        className="absolute right-3 bottom-2.5 text-gray-500 hover:text-blue-500"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label
                                htmlFor="emailField"
                                className="text-blue-400 font-medium text-sm "
                            >
                                Accept rules & condition
                            </label>
                        </div>
                        <div className="text-center">
                            <button className="bg-blue-500 px-4 py-2 rounded-full text-white w-3/4 mx-auto">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 my-auto">
                    <div>
                        <img src={signup_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
