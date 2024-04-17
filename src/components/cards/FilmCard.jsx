/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom"


function FilmCard({ main_image, name, id, cardType }) {
    const navigate = useNavigate()
    const goToDetailPage = () => {
        const url = `/${cardType}/${id}`
        navigate(url)
    }

    return (
        <div className="p-2 w-full flex flex-col items-center gap-1 bg-blue-400 cursor-pointer ">
            <img
                onClick={goToDetailPage}
                className="h-56 object-cover w-full " src={main_image} alt={name} />
            <h2 className="text-lg">
                <span className="capitalize font-semibold">
                {name}
            </span></h2>
           

        </div>
    )
}

export default FilmCard
