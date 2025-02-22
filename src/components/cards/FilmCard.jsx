/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom"


function FilmCard({ main_image, name_uz, id, cardType,category }) {
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
                {name_uz}
            </span></h2>
            <h2 className="text-md">
                <span className="capitalize font-semibold">
                Kategoriya: {category?.name_uz}
            </span></h2>
           

        </div>
    )
}

export default FilmCard
