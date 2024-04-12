/* eslint-disable react/prop-types */
function Subtitle({styleClass, children}){
    return(
        <div className={`text-lg font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle