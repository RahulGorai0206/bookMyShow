import React from "react";
import MovieNavbarComponent from "../components/navbar/movieNavbarComponent";

const MovieLayoutHOC = (Componet) => ({ ...props }) => {
    return (
        <div>
            <MovieNavbarComponent/>
            <Componet {...props}/>
            <div>Footer</div>
        </div>
    )
};

export default MovieLayoutHOC;