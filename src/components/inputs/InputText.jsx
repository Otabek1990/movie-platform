/* eslint-disable react/prop-types */
import { useState } from "react";

function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val) => {
    setValue(val);

    updateFormValue({ updateType, value: val });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-slate-500 text-sm " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        min={0}
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={(e) => updateInputValue(e.target.value)}
        className="border border-gray-400 text-md rounded outline-none p-2 mt-1 w-full "
        autoComplete="off"
      />
    </div>
  );
}

export default InputText;
