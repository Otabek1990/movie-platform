import TitleCard from "@/components/cards/TitleCard"

import { ColorRing } from "react-loader-spinner";
import { useCinemasQuery } from "@/services/cinemaApi";
import ErrorText from "@/components/typography/ErrorText";
import { useSerialItemDetailsQuery } from "@/services/serialApi";
import { useParams } from "react-router-dom";
import SerialDetailUi from "./SerialDetailUi";
// import ErrorText from "@/components/typography/ErrorText";
// import CategoryUi from "./CategoryUi";
// import { MODAL_BODY_TYPES } from "@/lib/globalConstants";





function SerialDetail() {
    const { id } = useParams()
    const { data: serialDetail, isSuccess, isError, isLoading } = useSerialItemDetailsQuery(id)

    return (
        <div className="w-full">
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
