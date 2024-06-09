/* eslint-disable react/prop-types */
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import {
    CONFIRMATION_MODAL_CLOSE_TYPES,
    MODAL_BODY_TYPES,
} from "@/lib/globalConstants";
import { openModal } from "@/features/modalSlice";
import { useDispatch } from "react-redux";
// import { formatDate } from "../../utils/formatDate";

function TableRow({ title, dataItem, index, tableBodyItems }) {

console.log(title)
    const dispatch = useDispatch();
    console.log(dataItem)
    const openEditModal = () => {
        dispatch(
            openModal({
                title: `Tahrirlash`,
                bodyType: MODAL_BODY_TYPES[title.toUpperCase()],
                extraObject: dataItem,
            })
        );
    };



    const deleteHandler = async () => {
        dispatch(
            openModal({
                title: "Tasdiqlash",
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Rostdan o'chirmoqchimisiz?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES[title.toUpperCase()],
                    id: dataItem.id,
                },
            })
        );
    };
    return (
        <tr className=" cursor-pointer">
            <td className="font-semibold ">{index+1}</td>
            {tableBodyItems.map((item, ind) => {

                return (
                    < td key={ind} className="capitalize font-semibold" >
                        {
                            dataItem[item]
                        }

                    </td>

                )

            })
            }
            <td>
                <div className="flex gap-x-6 justify-center items-center">

                    <BsFillTrashFill
                        onClick={deleteHandler}
                        className="text-lg cursor-pointer"
                    />
                    <AiFillEdit
                        onClick={openEditModal}
                        className="text-xl cursor-pointer"
                    />
               
                </div>
            </td>

        </tr >
    );
}

export default TableRow;
