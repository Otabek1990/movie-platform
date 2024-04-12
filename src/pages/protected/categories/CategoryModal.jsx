/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
// import InputText from "@components/ui/InputText"
// import ErrorText from "../../components/Typography/ErrorText";
import { showNotification } from "../../../features/headerSlice";
import { Button } from "@/components/ui/button";
import InputText from "@/components/inputs/InputText";
// import {
//   useAddMeasureMutation,
//   useUpdateMeasureMutation,
// } from "../../services/measureApi";

function CategoryModal({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [measureObj, setMeasureObj] = useState({
    name: extraObject?.name || "",
  });
  //   const [updateMeasure] = useUpdateMeasureMutation();
  //   const [addMeasure] = useAddMeasureMutation();

  const saveEditMeasure = async () => {
    // if (measureObj.name.trim() === "")
    //   return setErrorMessage("O'lchov birligi kiriting!");
    // else {
    //   await (extraObject
    //     ? updateMeasure({ ...measureObj, id: extraObject?.id })
    //     : addMeasure(measureObj)
    //   )
    //     .unwrap()
    //     .then((res) => {
    //       dispatch(
    //         showNotification({
    //           message: `O'lchov ${extraObject ? "tahrirlandi" : "qo'shildi"}!`,
    //           status: 1,
    //         })
    //       );
    //       closeModal();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setErrorMessage("Xatolik ruy berdi!");
    //     });
    // }
  };
  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setMeasureObj({ ...measureObj, [updateType]: value });
  };

  return (
    <div className="flex flex-col items-center gap-4">

      <InputText
        type="text"
        defaultValue={measureObj.name}
        updateType="name"
        containerStyle="mt-2"
        labelTitle="Kategoriya nomi"
        updateFormValue={updateFormValue}
        placeholder={"kategoriya nomini kiriting"}
      />


      {/* <ErrorText styleClass="mt-4">{errorMessage}</ErrorText> */}
      <div className="flex items-center w-full justify-end gap-4">
        <Button className="bg-red-500 hover:bg-red-600" onClick={() => closeModal()}>
          Bekor qilish
        </Button>
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 px-6"
          onClick={() => saveEditMeasure()}
        >
          {extraObject ? "Tahrirlash" : "Qo'shish"}
        </Button>
      </div>
    </div>
  );
}

export default CategoryModal;
