import TitleCard from "@/components/cards/TitleCard"

import { ColorRing } from "react-loader-spinner";
import { useCinemasQuery } from "@/services/cinemaApi";
import ErrorText from "@/components/typography/ErrorText";
import { useSerialsQuery } from "@/services/serialApi";
import ChooseBannerForm from "./ChooseBannerForm";
import { useBannersQuery } from "@/services/bannerApi";
import BannerUi from "./BannerUi";






function Banners() {
    const { data: cinemas, isSuccess } = useCinemasQuery()

    const { data: serials, isSuccess: isSuccessSerials } = useSerialsQuery()

    const { data: banners,isSuccess:isSuccessBanners,isError:isErrorBanners,isLoading:isLoadingBanners } = useBannersQuery()
   

    return (
        <div className="w-full">
            <TitleCard
                headLine={"Bannerlar"}
            >
                <div className="w-full md:w-2/3 flex  flex-row gap-4 ">
                    <ChooseBannerForm formTitle="film" options={isSuccess ? cinemas.results : []} />
                    <ChooseBannerForm formTitle="serial" options={isSuccessSerials ? serials.results : []} />
                </div>
                {isErrorBanners && (
                    <ErrorText styleClass="text-4xl mt-5 text-center font-bold">
                        Xatolik sodir bo&apos;ldi! <body>

                        </body>
                    </ErrorText>
                )}
                {isLoadingBanners && (
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
                {isSuccessBanners && (
                    <BannerUi banners={banners?.results} />
                )
                }



            </TitleCard>
        </div>
    )
}

export default Banners
