/* eslint-disable react/prop-types */
import { useState } from 'react';

function UploadInput({
    onChange,
    previewWidth,
    previewHeight,
    accept,
    label,
    name,
    required,
    fileType,
    isMultiple
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
        setImages(prev=>[...prev, ...selectedImages]);
        if(onChange){
            onChange(images)
        }

    }

    return (
        <div className='flex  flex-col items-start gap-2'>
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
        </div>
    );
}

export default UploadInput;
