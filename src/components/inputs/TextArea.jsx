/* eslint-disable react/prop-types */


function TextArea({
    labelTitle,
    labelStyle,

    containerStyle,
    placeholder,
    required,
    name,
    minLengthOfWords,
    maxLengthOfWords
}) {

    return (
        <div className={` flex flex-col  items-start gap-1 ${containerStyle}`}>
            <label htmlFor={name} className={"text-sm md:text-md" + labelStyle}>
                {labelTitle}
                {required &&
                    <sup className="text-md text-red-700">
                        *
                    </sup>
                }
            </label>
            <textarea
                minLength={minLengthOfWords || 0}
                maxLength={maxLengthOfWords || 100000}
                id={name}
                name={name}
                required={required}
                min={0}

                placeholder={placeholder || ""}
                className="border border-gray-400 min-h-36 text-md rounded outline-none p-2 w-full "

            >
            </textarea>
        </div>
    );
}

export default TextArea;
