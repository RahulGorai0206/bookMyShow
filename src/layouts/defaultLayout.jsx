import React from "react";

const DefaultLayoutHOC = (componet) => ({ ...props }) => {
    return (
        <div>
            <componet {...props}/>
        </div>
    )
};

export default DefaultLayoutHOC;