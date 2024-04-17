import TitleCard from "@/components/cards/TitleCard"
import { Button } from "@/components/ui/button"
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CreateFilmForm } from "../createFilm/CreateFilmForm";


function CreateSerial() {
    const navigate = useNavigate()
    return (
        <div className="w-full ">
            <div className='w-full items-center flex justify-start'>

                <Button
                    onClick={() => navigate(-1)}
                    className="bg-indigo-600 h-8  flex items-center gap-1 text-white hover:bg-indigo-800 ">
                    <FaChevronLeft />
                    <span>
                        Orqaga
                    </span>
                </Button>
            </div>
            <TitleCard headLine={"Yangi serial kiritish"}>
                <CreateFilmForm formTitle={"Serial"} />
            </TitleCard>
        </div>
    )
}

export default CreateSerial
