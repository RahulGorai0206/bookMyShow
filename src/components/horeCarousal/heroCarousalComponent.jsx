import React, { useState } from 'react';
import HeroSlider from "react-slick";

function HeroCarousalComponent() {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 298618,
      "original_language": "en",
      "original_title": "The Flash",
      "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      "popularity": 4631.142,
      "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      "release_date": "2023-06-13",
      "title": "The Flash",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 1773
    },
    {
      "adult": false,
      "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      "genre_ids": [
        35,
        12,
        14
      ],
      "id": 346698,
      "original_language": "en",
      "original_title": "Barbie",
      "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      "popularity": 4493.487,
      "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      "release_date": "2023-07-19",
      "title": "Barbie",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 1621
    },
    {
      "adult": false,
      "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 667538,
      "original_language": "en",
      "original_title": "Transformers: Rise of the Beasts",
      "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      "popularity": 4090.661,
      "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      "release_date": "2023-06-06",
      "title": "Transformers: Rise of the Beasts",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2065
    },
    {
      "adult": false,
      "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
      "genre_ids": [
        16,
        10751,
        14,
        35
      ]
    },
  ]);
  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider>
          {
            images.map((images)=>(
              <div className='w-full h-56 md:80 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-center'/>
              </div>
            ))
          }
        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
      <HeroSlider>
          {
            images.map((images)=>(
              <div className='w-full h-96 px-2 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-center'/>
              </div>
            ))
          }
        </HeroSlider>
      </div>

    </>
  )
}

export default HeroCarousalComponent