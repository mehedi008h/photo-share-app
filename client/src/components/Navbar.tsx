import * as React from "react";
import { Link } from "react-router-dom";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
    return (
        <div className="w-full bg-black">
            <div className="w-4/5 h-16 flex flex-row justify-between items-center mx-auto">
                <div>
                    <Link
                        to="/"
                        className="font-bold font-poppins text-2xl text-amber-200"
                    >
                        PhotoFunia
                    </Link>
                </div>
                {/* mobile device none  */}
                <div className="text-gray-300">2</div>
                <div className="text-white">
                    <Link
                        className="border-2 border-blue-400 hover:border-blue-300 hover:text-gray-100 px-4 py-1.5 rounded-full font-roboto font-semibold tracking-wide"
                        to={"/login"}
                    >
                        Signin
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
