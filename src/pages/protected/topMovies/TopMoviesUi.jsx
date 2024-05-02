/* eslint-disable react/prop-types */

import BannerCard from "@/components/cards/BannerCard"


function TopMoviesUi({ topMovies }) {
   
    return (
        <div className="w-full border-t-2 my-3 border-gray-500">
            <div className="w-full mt-3 grid gap-2 grid-cols-2 md:grid-cols-4">
                {topMovies.map(banner=>(
                    <BannerCard {...banner} key={banner.id}/>
                ))}
            </div>


        </div>
    )
}

export default TopMoviesUi
