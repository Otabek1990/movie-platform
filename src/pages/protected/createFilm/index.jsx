import TitleCard from "@/components/cards/TitleCard"
import { CreateFilmForm } from "./CreateFilmForm"
import { Button } from "@/components/ui/button"
import { FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function CreateFilm() {
    const navigate = useNavigate()
    return (
        <div className="w-full ">
            <Button
                onClick={() => navigate(-1)}
                className="bg-indigo-600 flex items-center gap-1 text-white hover:bg-indigo-800 ">
                <FaChevronLeft />
                <span>
                    Orqaga
                </span>
            </Button>
            <TitleCard headLine={"Yangi film kiritish"}>

                <CreateFilmForm formTitle="Film" />
            </TitleCard>
        </div>
    )
}

export default CreateFilm
