/* eslint-disable react/prop-types */
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";


function UploadInput({
    onChange,
    previewWidth,
    previewHeight,
    accept,
    label,
    name,
    required,
    fileType,
    isMultiple,
    setCadreImagesHandler
}) {




    const [fileData, setFileData] = useState(null);
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const selectedData = event.target.files[0];
        setFileData(selectedData);
        if (onChange) {
            onChange(selectedData);
        }
    };
    const handleMultipleImages = (event) => {
        const selectedImages = event.target.files;
        console.log(selectedImages)
        let fileListArray = [];
        for (let i = 0; i < selectedImages.length; i++) {
            let file = selectedImages[i];
            fileListArray.push({ id: nanoid(), file: file });
        }


        setImages(prev => [...prev, ...fileListArray]);
        if(onChange){
            onChange(images)
        }

    }
    const deleteImage = (id) => {
        const filtered = images.filter(item => item.id !== id)
        setImages(filtered)
    }
    useEffect(() => {
        if (setCadreImagesHandler) {
            setCadreImagesHandler(images)
        }
    }, [images])

    return (
        <div className='flex w-full flex-col items-start gap-2'>
            <label
                htmlFor={name}
                className="relative flex flex-col md:flex-row items-start gap-2 cursor-pointer rounded-md bg-white 
           font-medium text-indigo-600 focus-within:outline-none 
              hover:text-indigo-500 md:items-center px-2 py-1"

            >
                <span className="font-bold text-md">
                    {label}
                </span>

                <input
                    name={name}
                    required={required}
                    type="file"
                    multiple={isMultiple}
                    accept={accept}
                    onChange={isMultiple ? handleMultipleImages : handleImageChange}
                    className=''
                />
            </label>
            {(fileType === "image" && fileData) && (
                <div>
                    <img className='object-contain' src={URL.createObjectURL(fileData)} alt="Selected" style={{ maxWidth: previewWidth, maxHeight: previewHeight }} />
                </div>
            )}
            {(fileType === "video" && fileData) && (
                <div>
                    <video
                        controls
                        className='object-contain' src={URL.createObjectURL(fileData)}
                        style={{ maxWidth: previewWidth, maxHeight: previewHeight }} >
                    </video>
                </div>
            )}
            {
                (fileType === "images" && images.length > 0 && (
                    <div className='w-full p-3 grid grid-cols-2  gap-3'>
                        {images.map(img => (
                            <div key={img.id} className=' h-64 relative w-full'>
                                <img className='h-full w-full object-cover' src={URL.createObjectURL(img.file)} alt="selected" />
                                <button
                                    onClick={() => deleteImage(img.id)}
                                    className='absolute top-2 right-2 p-2 rounded bg-indigo-950 '>
                                    <FaTrash className='text-md text-white ' />
                                </button>
                            </div>
                        ))}

                    </div>
                ))
            }
        </div>
    );
}

export default UploadInput;
