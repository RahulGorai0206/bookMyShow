import React from "react";
import MovieNavbarComponent from "../components/navbar/movieNavbarComponent";

const MovieLayoutHOC = (componet) => ({ ...props }) => {
    return (
        <div>
            <MovieNavbarComponent/>
            <componet {...props}/>
            <div>Footer</div>
        </div>
    )
};

export default MovieLayoutHOC;