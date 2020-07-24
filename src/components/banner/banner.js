import React from "react";
impot "./banner.css";


const banner = props => {

    const handleLogout = (props) => {
        sessionStorage.clear();

    }

    return (
        <header>
            <h1 calssName="site-title">HomeMade</h1>

            <h3>
                <span
                className="nav-link"
                onClick={handleLogout}>
                    Logout
                </span>
            </h3>
        </header>
    );
};

export default banner