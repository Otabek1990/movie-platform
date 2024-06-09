/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";

import ErrorText from "@/components/typography/ErrorText";
import { showNotification } from "@/features/headerSlice";
import { Button } from "@/components/ui/button";
import InputText from "@/components/inputs/InputText";
import { CirclesWithBar } from "react-loader-spinner";
import { useAddGenreMutation, useUpdateGenreMutation } from "@/services/genresApi";


function GenreModal({ closeModal, extraObject }) {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const [genreData, setGenreData] = useState({
        name_uz: extraObject?.name_uz || "",
    });

    const [addGenre, { isLoading, isError }] = useAddGenreMutation()
    const [updateGenre, { isLoading: isLoadingUpdate, isError: isErrorUpdate }] = useUpdateGenreMutation()

    const saveEditMeasure = async () => {
        if (genreData.name_uz.trim() === "")
            return setErrorMessage("Kategoriya kiriting!");
        try {
            const result = await (extraObject
                ? updateGenre({ ...genreData, id: extraObject?.id })
                : addGenre(genreData)
            ).unwrap();
            console.log('Janr added successfully:', result);
            dispatch(
                showNotification({
                    message: ` ${extraObject ? "Tahrirlandi" : "Qo'shildi"}!`,
                    status: 1,
                })
            );
            closeModal();
        } catch (error) {
            setErrorMessage("Xatolik ruy berdi!");
        }



    };
    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("");
        setGenreData({ ...genreData, [updateType]: value });
    };

    return (
        <div className="flex flex-col items-center gap-4">

            <InputText
                type="text"
                defaultValue={genreData.name_uz }
                updateType="name_uz"
                containerStyle="mt-2"
                labelTitle="Janr nomi"
                updateFormValue={updateFormValue}
                placeholder={"Janr nomini kiriting"}
            />



            {(isLoading || isLoadingUpdate) && <CirclesWithBar
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
            />}
            {(isError || isErrorUpdate) && <ErrorText styleClass=" text-md text-red-500">{errorMessage}</ErrorText>}
            <div className="flex items-center w-full justify-end gap-4">
                <Button className="bg-red-400 hover:bg-red-500" onClick={() => closeModal()}>
                    Bekor qilish
                </Button>
                <Button
                    disabled={isLoading || isLoadingUpdate}
                    className={`group ${(isLoading || isLoadingUpdate) ? "loading bg-indigo-300 hover:bg-indigo-300 focus:ring-indigo-300" : "bg-indigo-600"
                        }  flex justify-center gap-2 py-2 px-2
                  text-sm font-medium rounded-md text-white 
                   hover:bg-indigo-700 `}
                    onClick={() => saveEditMeasure()}
                >

                    <span>
                        {extraObject ? "Tahrirlash" : "Qo'shish"}
                    </span>
                </Button>





            </div>
        </div>
    );
}

export default GenreModal;
