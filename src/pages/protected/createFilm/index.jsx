import TitleCard from "@/components/cards/TitleCard"
import { CreateFilmForm } from "./CreateFilmForm"

function CreateFilm() {
    return (
        <div className="w-full ">
            <TitleCard  headLine={"Yangi film kiritish"}>

               <CreateFilmForm/>
            </TitleCard>
        </div>
    )
}

export default CreateFilm
