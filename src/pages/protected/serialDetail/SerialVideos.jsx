/* eslint-disable react/prop-types */

import { baseUrl } from "@/constants"


function SerialVideos({ series }) {

    return (
        <div className="my-2 flex flex-col gap-3 items-start">
            <h1 className="font-bold text-xl">Qismlar:</h1>
            <div className="w-full grid grid-cols-2  gap-2 md:grid-cols-4">
                {series.map(serie => (
                    <div className=" w-full flex flex-col  gap-1  items-start md:items-center" key={serie.id}>
                        <video className="h-44 w-full" controls src={`${baseUrl}${serie.video}`}></video>
                        <h2 className="font-bold">{serie.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SerialVideos
