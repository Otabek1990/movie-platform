import { RotatingLines } from "react-loader-spinner"
function SuspenseContent() {
    return (
        <div className="w-full h-screen flex justify-center pt-10 text-gray-300 dark:text-gray-200 bg-base-100">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default SuspenseContent