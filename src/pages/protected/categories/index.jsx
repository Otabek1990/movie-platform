import TitleCard from "@/components/cards/TitleCard"
import { useDispatch } from "react-redux"
import { openModal } from "@/features/modalSlice";
import { MODAL_BODY_TYPES } from "@/lib/globalConstants";
import { useCategoriesQuery } from "@/services/categoryApi";
import { ColorRing } from "react-loader-spinner";
import ErrorText from "@/components/typography/ErrorText";
import CategoryUi from "./CategoryUi";
// import { MODAL_BODY_TYPES } from "@/lib/globalConstants";




const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewUserModal = () => {
        dispatch(
            openModal({
                title: "Kategoriya qo'shish",
                bodyType: MODAL_BODY_TYPES.CATEGORY,
            })
        );
    };

    return (
        <div className="inline-block float-right">
            <button
                className="py-2 px-3 dark:bg-slate-700 bg-blue-700 rounded text-sm text-white"
                onClick={() => openAddNewUserModal()}
            >
                Kategoriya qo'shish
            </button>
        </div>
    );
};
function Categories() {
    const { data: categories, isSuccess, isError, isLoading } = useCategoriesQuery()

    console.log(categories)

    return (
        <div className="w-full">
            <TitleCard
                headLine={"Kategoriyalar"}
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
                        <CategoryUi
                            categories={categories?.results} />

                    </div>
                )

                }



            </TitleCard>
        </div>
    )
}

export default Categories
