import React from "react";
import Navbar from "../components/navbar/navbarComponent";

const DefaultLayoutHOC = (Componet) => ({ ...props }) => {
    return (
        <div>
            <Navbar/>
            <Componet {...props}/>
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayoutHOC;