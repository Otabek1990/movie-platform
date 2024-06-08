/* eslint-disable react/prop-types */

function Dropdown({
    labelTitle,
    placeholder,
    name,
    value,
    options,
    required
}) {

    return (
        <div className='flex w-full flex-col items-start gap-y-1' >
            <label className='text-sm md:text-md capitalize' htmlFor={name}>
                {labelTitle}
            </label>
            <select
                required={required}
                className='w-full p-2 cursor-pointer border border-slate-400' name={name} id={name}>
                <option disabled value="">{placeholder}</option>
                {
                    options?.map(opt => (
                        <option key={opt.id} value={opt[value]}>
                            {opt.name_uz}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown
