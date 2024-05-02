import TitleCard from "@/components/cards/TitleCard"
import { ColorRing } from "react-loader-spinner";
import { useCinemasQuery } from "@/services/cinemaApi";
import ErrorText from "@/components/typography/ErrorText";
import { useSerialsQuery } from "@/services/serialApi";
import { useTopMoviesQuery } from "@/services/topMovieApi";
import TopMoviesUi from "./TopMoviesUi";
import ChooseTopMoviesForm from "./ChooseTopMoviesForm";






function TopMovies() {
    const { data: cinemas, isSuccess } = useCinemasQuery()

    const { data: serials, isSuccess: isSuccessSerials } = useSerialsQuery()

    const { data: topMovies,isSuccess:isSuccessTopMovies,isError:isErrorTopMovies,isLoading:isLoadingTopMovies } = useTopMoviesQuery()
   console.log(topMovies);

    return (
        <div className="w-full">
            <TitleCard
                headLine={"Eng yaxshi filmlar"}
            >
                <div className="w-full md:w-2/3 flex  flex-row gap-4 ">
                    <ChooseTopMoviesForm formTitle="film" options={isSuccess ? cinemas.results : []} />
                    <ChooseTopMoviesForm formTitle="serial" options={isSuccessSerials ? serials.results : []} />
                </div>
                {isErrorTopMovies && (
                    <ErrorText styleClass="text-4xl mt-5 text-center font-bold">
                        Xatolik sodir bo&apos;ldi! <body>

                        </body>
                    </ErrorText>
                )}
                {isLoadingTopMovies && (
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
                {isSuccessTopMovies && (
                    <TopMoviesUi topMovies={topMovies?.results} />
                )
                }



            </TitleCard>
        </div>
    )
}

export default TopMovies
