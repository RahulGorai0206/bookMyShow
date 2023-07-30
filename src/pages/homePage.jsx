import React,{useState} from "react";

// Layout HOC's
import DefaultLayoutHOC from "../layouts/defaultLayout";

// Components
import EntertainmentComponent from "../components/entertainment/entertainmentComponent";
import HeroCarousalComponent from "../components/horeCarousal/heroCarousalComponent";
import PosterSlider from "../components/posterSlider/posterSlider";

function HomePage() {
    const [recomendedMovies, useRecomendedMovies] =useState([]);
    const [premireMovies, setPremireMovies] =useState([]);
    const [onlineStreamEvents,setOnlineStreamEvents] = useState([]);

    return (
        <>
        <HeroCarousalComponent/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best of Entertainment</h1>
            <EntertainmentComponent/>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider
            title="Recomemded Movies"
            subject="List of recomended movies"
            posters={recomendedMovies}
            isDark={false}
            />
        </div>
        <div className="bg-premire-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full"/>
                </div>
                <PosterSlider
                    title="Premires"
                    subject="New release every Friday"
                    posters={premireMovies}
                    isDark={true}
                />
            </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
                    title="Online Streaming Event"
                    subject=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
        </div>
        </>
    )
};

export default DefaultLayoutHOC(HomePage);