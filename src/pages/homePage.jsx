import React from "react";

// Layout HOC's
import DefaultLayoutHOC from "../layouts/defaultLayout";

// Components
import EntertainmentComponent from "../components/entertainment/entertainmentComponent";
import heroCarousalComponent from "../components/horeCarousal/heroCarousalComponent";
import PosterSlider from "../components/posterSlider/posterSlider";

function HomePage() {
    return <div>Hiii</div>
};

export default DefaultLayoutHOC(HomePage);