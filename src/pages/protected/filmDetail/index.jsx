import TitleCard from "@/components/cards/TitleCard"

import { ColorRing } from "react-loader-spinner";
import { useCinemaItemDetailsQuery } from "@/services/cinemaApi";
import ErrorText from "@/components/typography/ErrorText";
import { useNavigate, useParams } from "react-router-dom";
import FilmDetailUi from "./FilmDetailUi";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";






function FilmDetail() {
    const { id } = useParams()
    const { data: cinemaDetail, isSuccess, isError, isLoading } = useCinemaItemDetailsQuery(id)
const navigate=useNavigate()



    return (
        <div className="w-full p-3">
                <Button
                    onClick={() => navigate(-1)}
                    className="bg-indigo-600  flex items-center gap-1 text-white hover:bg-indigo-800 ">
                    <FaChevronLeft />
                    <span>
                        Orqaga
                    </span>
                </Button>
            <TitleCard
                headLine={"Film Haqida"}

            >
                {isError && (
                    <ErrorText styleClass="text-4xl mt-5 text-center font-bold">
                        Xatolik sodir bo&apos;ldi! <body>

                        </body>
                    </ErrorText>
                )}
                {isLoading && (
                    <ColorRing
                        visible={true}
                        height="160"
                        width="160"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{ margin: " 50px auto" }}
                        wrapperClass="blocks-wrapper"
                        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
                    />
                )}
                {isSuccess && (
                    <FilmDetailUi cinemaDetail={cinemaDetail} />
                )
                }



            </TitleCard>
        </div>
    )
}

export default FilmDetail
