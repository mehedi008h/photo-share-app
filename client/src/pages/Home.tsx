import * as React from "react";
import Navbar from "../components/Navbar";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    );
};

export default Home;
