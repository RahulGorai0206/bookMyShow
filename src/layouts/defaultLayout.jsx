import React from "react";
import Navbar from "../components/navbar/navbarComponent";

const DefaultLayoutHOC = (componet) => ({ ...props }) => {
    return (
        <div>
            <Navbar/>
            <componet {...props}/>
            <div>Footer</div>
        </div>
    )
};

export default DefaultLayoutHOC;