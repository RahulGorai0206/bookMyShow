import React from "react";

const MovieLayoutHOC = (componet) => ({ ...props }) => {
    return (
        <div>
            <div>
                <componet {...props}/>
            </div>
        </div>
    )
};

export default MovieLayoutHOC;