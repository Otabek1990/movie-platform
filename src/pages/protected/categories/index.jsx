import TitleCard from "@/components/cards/TitleCard"
import { useDispatch } from "react-redux"
import { openModal } from "@/features/modalSlice";
import { MODAL_BODY_TYPES } from "@/lib/globalConstants";
// import { MODAL_BODY_TYPES } from "@/lib/globalConstants";




const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewUserModal = () => {
        console.log('open')
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
                Kategoriya qoshish
            </button>
        </div>
    );
};
function Categories() {
    return (
        <div className="w-full">
            <TitleCard
                TopSideButtons={<TopSideButtons />}
            >

               
            </TitleCard>
        </div>
    )
}

export default Categories
