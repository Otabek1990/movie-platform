import TitleCard from "@/components/cards/TitleCard"
import { useDispatch } from "react-redux"
import { openModal } from "@/features/modalSlice";
import { MODAL_BODY_TYPES } from "@/lib/globalConstants";
import { ColorRing } from "react-loader-spinner";
import ErrorText from "@/components/typography/ErrorText";
import { useGenresQuery } from "@/services/genresApi";
import GenresUi from "./GenresUi";




const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewUserModal = () => {
    console.log('open')
    dispatch(
      openModal({
        title: "Janr qo'shish",
        bodyType: MODAL_BODY_TYPES.GENRE,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="py-2 px-3 dark:bg-slate-700 bg-blue-700 rounded text-sm text-white"
        onClick={() => openAddNewUserModal()}
      >
        Janr qoshish
      </button>
    </div>
  );
};
function Genres() {
  const { data: genres, isSuccess, isError, isLoading } = useGenresQuery()

  console.log(genres)

  return (
    <div className="w-full">
      <TitleCard
        headLine={"Janrlar"}
        TopSideButtons={<TopSideButtons />}
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
                    <div className="my-6">
                        <GenresUi
                            genres={genres?.results} />

                    </div>
                )

                }



      </TitleCard>
    </div>
  )
}

export default Genres
