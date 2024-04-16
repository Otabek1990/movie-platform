import TitleCard from "@/components/cards/TitleCard"

import { ColorRing } from "react-loader-spinner";

import ErrorText from "@/components/typography/ErrorText";
import { useSerialItemDetailsQuery } from "@/services/serialApi";
import { useNavigate, useParams } from "react-router-dom";
import SerialDetailUi from "./SerialDetailUi";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";






function SerialDetail() {
    const { id } = useParams()
    const { data: serialDetail, isSuccess, isError, isLoading } = useSerialItemDetailsQuery(id)
    const navigate=useNavigate()
    return (
        <div className="w-full">
            <Button
                onClick={() => navigate(-1)}
                className="bg-indigo-600  flex items-center gap-1 text-white hover:bg-indigo-800 ">
                <FaChevronLeft />
                <span>
                    Orqaga
                </span>
            </Button>
            <TitleCard
                headLine={"Serial haqida"}

            >
                {isError && (
                    <ErrorText styleClass="text-4xl mt-5 text-center font-bold">
                        Xatolik sodir bo'ldi! <body>

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
                    <SerialDetailUi serialDetail={serialDetail} />
                )
                }




            </TitleCard>
        </div>
    )
}

export default SerialDetail
