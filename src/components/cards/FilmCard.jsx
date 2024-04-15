/* eslint-disable react/prop-types */

import { sliceText } from "@/lib/sliceText"


function FilmCard({ main_image, name, category, genre, year, description }) {
    
    return (
        <div className="p-2 w-full flex flex-col items-center gap-1 bg-blue-400 cursor-pointer ">
            <img className="h-56 object-cover w-full " src={"http://159.223.145.49:8080/media/cinema/main_image/kungfu-panda_W8z4Hta.webp"} alt={name} />
            <h2>Nomi: {name}</h2>
            <h2>Categoriya: {category?.name}</h2>
            <h2>Janri: {genre?.name}</h2>
            <h2>Yili : {year}</h2>
            <h2>Film haqida: {sliceText(description,15)}</h2>

        </div>
    )
}

export default FilmCard
