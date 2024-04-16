import TitleCard from "@/components/cards/TitleCard"

import { ColorRing } from "react-loader-spinner";
import { useCinemasQuery } from "@/services/cinemaApi";
import ErrorText from "@/components/typography/ErrorText";
import { useSerialsQuery } from "@/services/serialApi";
import { data } from "autoprefixer";
import ChooseBannerForm from "./ChooseBannerForm";
import { useBannersQuery } from "@/services/bannerApi";
// import ErrorText from "@/components/typography/ErrorText";
// import CategoryUi from "./CategoryUi";
// import { MODAL_BODY_TYPES } from "@/lib/globalConstants";





function Banners() {
    const { data: cinemas, isSuccess, isError, isLoading } = useCinemasQuery()

    const { data: serials, isSuccess:isSuccessSerials, isError: isErrorserials, isLoading:isLoadingSerials } = useSerialsQuery()

    const {data: banners}=useBannersQuery()
    console.log(banners)

    return (
        <div className="w-full">
            <TitleCard
                headLine={"Bannerlar"}

            >
                <div className="w-full flex flex-row gap-4 ">
                <ChooseBannerForm formTitle="film" options={isSuccess ? cinemas.results : []}/>
                <ChooseBannerForm formTitle="serial" options={isSuccessSerials ? serials.results : []}/>
                </div>
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
                {/* {isSuccess && (
                    <FilmsUi cinemas={cinemas.results} />
                )
                } */}



            </TitleCard>
        </div>
    )
}

export default Banners
