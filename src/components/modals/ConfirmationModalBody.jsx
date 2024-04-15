/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CONFIRMATION_MODAL_CLOSE_TYPES } from "@/lib/globalConstants";
import { showNotification } from "@/features/headerSlice";
import { useDeleteCategoryMutation } from "@/services/categoryApi";
import { Button } from "../ui/button";
import { useDeleteGenreMutation } from "@/services/genresApi";
import { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";



function ConfirmationModalBody({ extraObject, closeModal }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteGenre] = useDeleteGenreMutation()

  const { message, type, id } = extraObject;

  const handleDeletion = async (deleteFunction, successMessage, dispatch) => {
    setLoading(true)
    try {
      await deleteFunction.unwrap();
      dispatch(showNotification({ message: successMessage, status: 1 }));
      setLoading(false)
      setError("")
      closeModal();

    } catch (error) {
      console.log(error);
      setLoading(false)
      setError("O'chirishda xatolik bo'ldi!")

    }
  };

  const deletionHandlers = {
    [CONFIRMATION_MODAL_CLOSE_TYPES.CATEGORY]: async (id, dispatch) => {
      await handleDeletion(deleteCategory(id), "Kategoriya o'chirildi!", dispatch);
    },
    [CONFIRMATION_MODAL_CLOSE_TYPES.GENRE]: async (id, dispatch) => {
      await handleDeletion(deleteGenre(id), "Janr o'chirildi!", dispatch);
    }
  };


  const proceedWithYes = async () => {

    if (deletionHandlers[type]) {
      deletionHandlers[type](id, dispatch);
    } else {
      setError("O'chirishda xatolik bo'ldi!")
    }

  };

  return (
    <>
      <p className=" text-lg mt-2 text-center">{message}</p>

      {loading &&
        <div className="w-full flex items-center justify-center">

          <CirclesWithBar
            height="30"
            width="30"
            color="blue"
            outerCircleColor="blue"
            innerCircleColor="blue"
            barColor="blue"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      }
      {error &&
        <div className="w-full flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>

      }

      <div className="modal-action mt-4 w-full flex items-center gap-3 justify-center">
        <Button className="btn btn-outline bg-red-400 text-md  " onClick={() => closeModal()}>
          Bekor qilish
        </Button>

        <Button
          className="btn btn-primary w-36 text-md bg-indigo-500"
          onClick={() => proceedWithYes()}
        >
          Ha
        </Button>
      </div>
    </>
  );
}

export default ConfirmationModalBody;
