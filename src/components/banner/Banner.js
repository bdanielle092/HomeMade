import React from "react";
import "./Banner.css";

const Banner = props => {

    return (
        <header>
            <h1 className="site-title">
                <img src={require("./HMlogo.png")} alt="logo" />
            </h1>
        </header>
    )
}
export default Banner