// import { MODAL_BODY_TYPES } from "../lib/globalConstants";
import { useSelector, useDispatch } from "react-redux";
// import { closeModal } from "../features/common/modalSlice";
// import ConfirmationModalBody from "@components/modals/ConfirmationModalBody"
import CategoryModal from "@/pages/protected/categories/CategoryModal";
import { closeModal } from "@/features/modalSlice";
import { MODAL_BODY_TYPES } from "@/lib/globalConstants";
// import CategoryModalBody from "../features/categories/CategoryModalBody";
// import ProductModalBody from "../features/products/ProductModalBody";
// import MeasureModalBody from "../features/measures/MeasureModalBody";
// import UserModalBody from "../features/users/UserModalBody";
// import StoreModalBody from "../features/allProcessesStores/rawProductStore/StoreModalBody";
// import SendRawProductModalBody from "../features/allProcessesStores/rawProductStore/SendRawProductModalBody";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}




      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box p-3  ${size === "lg" ? "max-w-5xl" : ""} ${isOpen ? 'modal-container' : "hidden"}`}>
          <button
            className="btn btn-md btn-circle text-xl absolute right-2 top-2"
            onClick={() => close()}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-4 text-center">{title}</h3>

          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.CATEGORY]: (
                <CategoryModal
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),





              // [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
