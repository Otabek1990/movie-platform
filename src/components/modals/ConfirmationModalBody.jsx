import { useDispatch } from "react-redux";
import { CONFIRMATION_MODAL_CLOSE_TYPES } from "../../lib/globalConstants";
import { showNotification } from "../headerSlice";
// import { useDeleteCategoryMutation } from "../../../services/categoryApi";
// import { useDeleteProductMutation } from "../../../services/productApi";
// import { useDeleteMeasureMutation } from "../../../services/measureApi";
// import { useDeleteDepartmentMutation } from "../../../services/departmentApi";
// import { useDeleteUserMutation } from "../../../services/userApi";
// import { useDeleteProcessMutation } from "../../../services/processesApi";

function ConfirmationModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch();
    //   const [deleteCategory] = useDeleteCategoryMutation();
    //   const [deleteProduct] = useDeleteProductMutation();
    //   const [deleteMeasure] = useDeleteMeasureMutation();
    //   const [deleteDepartment] = useDeleteDepartmentMutation();
    //   const [deleteUser] = useDeleteUserMutation();
    //   const [deleteProcess]=useDeleteProcessMutation()

    const { message, type, id } = extraObject;

    const proceedWithYes = async () => {
        alert("yesss")

        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.CATEGORY) {
        //   await deleteCategory(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(
        //         showNotification({ message: "Kategoriya o'chirildi!", status: 1 })
        //       );
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.PRODUCT) {
        //   await deleteProduct(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(
        //         showNotification({ message: `tovar o'chirildi!`, status: 1 })
        //       );
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.MEASURE) {
        //   await deleteMeasure(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(
        //         showNotification({ message: `O'lchov birligi o'chirildi!`, status: 1 })
        //       );
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DEPARTMENT) {
        //   await deleteDepartment(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(
        //         showNotification({ message: `Bo'lim o'chirildi!`, status: 1 })
        //       );
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.USER) {
        //   await deleteUser(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(showNotification({ message: `Hodim o'chirildi!`, status: 1 }));
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // if (type === CONFIRMATION_MODAL_CLOSE_TYPES.RAWPRODUCTSTORE) {
        //   await deleteProcess(id)
        //     .unwrap()
        //     .then((res) => {
        //       dispatch(showNotification({ message: `tovar o'chirildi!`, status: 1 }));
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }

        closeModal();
    };

    return (
        <>
            <p className=" text-xl mt-8 text-center">{message}</p>

            <div className="modal-action mt-12">
                <button className="btn btn-outline   " onClick={() => closeModal()}>
                    Bekor qilish
                </button>

                <button
                    className="btn btn-primary w-36"
                    onClick={() => proceedWithYes()}
                >
                    Ha
                </button>
            </div>
        </>
    );
}

export default ConfirmationModalBody;
