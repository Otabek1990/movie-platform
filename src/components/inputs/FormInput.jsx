/* eslint-disable react/prop-types */


function FormInput({
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    placeholder,
    required,
    name
}) {

    return (
        <div className={` flex flex-col  items-start gap-1 ${containerStyle}`}>
            <label htmlFor={name} className={"text-sm whitespace-nowrap md:text-md"+labelStyle}>
                {labelTitle}
                {required &&
                    <sup className="text-md text-red-700">
                        *
                    </sup>
                }
            </label>
            <input
                id={name}
                name={name}
                required={required}
                min={0}
                type={type || "text"}
                placeholder={placeholder || ""}
                className="border border-gray-400 text-md rounded outline-none p-2 w-full "
                autoComplete={type === "password" ? "off" : name}
            />
        </div>
    );
}

export default FormInput;
