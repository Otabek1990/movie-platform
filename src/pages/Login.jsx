/* eslint-disable react/prop-types */
import {
    InformationCircleIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";


import { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import axios from "axios";
import { baseUrl } from "@/constants";
import FormInput from "@/components/inputs/FormInput";


// {username:,password}
function Login({ setToken }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const forma = new FormData(event.target)
        const formData = Object.fromEntries(forma.entries())
        setLoading(true)
        try {
            const response = await axios.post(`${baseUrl}/v1/users/login/`, formData)
            localStorage.setItem("token", response.data?.token)
            setToken(response.data?.token)
            localStorage.setItem("role", response.data?.role)
            setLoading(false)
            setError("")
            navigate("/")
        }
        catch (err) {
            setError("Tel yoki parol xato! ")
            setLoading(false)

        }

    }

    return (
        <div className="grid bg-banner bg-cover  grid-cols-1 lg:grid-cols-2 h-screen">
            <div
                className="hidden  bg-cover bg-no-repeat bg-center lg:block"

            ></div>
            <div className="flex  justify-center items-center">
                <div className="w-96 space-y-8 lg:w-96">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            Sahifaga kirish
                        </h2>
                    </div>
                    {error && (
                        <div className="text-sm  p-4 bg-indigo-100 rounded-lg flex items-center">
                            <InformationCircleIcon className="w-6 h-6 fill-red-700" />
                            <span className="text-red-600 text-md font-semibold ml-1">{error}</span>
                        </div>
                    )}
                    <form
                        className="mt-8 space-y-6"
                        method="POST"
                        onSubmit={handleLoginSubmit}
                    >
                        <div className="rounded-md shadow-sm space-y-4">

                            <FormInput
                                labelTitle={"Tel raqam"}
                                labelStyle={"text-md font-medium text-white"}
                                type="text"
                                containerStyle={""}
                                placeholder={"Tel raqam kiriting"}
                                name="username"
                                required={true}

                            />
                            <FormInput
                                labelTitle={"Parol"}
                                labelStyle={"text-md font-medium text-white"}
                                type="password"
                                containerStyle={""}
                                placeholder={"Parol kiriting"}
                                name="password"
                                required={true}

                            />

                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className={`group ${loading ? "loading bg-indigo-300 hover:bg-indigo-300 focus:ring-indigo-300" : "bg-indigo-600"
                                    } relative w-full flex justify-center py-2 md:py-3 px-4 border border-transparent 
                  text-sm font-medium rounded-md text-white 
                   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {loading ? (
                                        <CirclesWithBar
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
                                        />
                                    ) : (
                                        <LockClosedIcon
                                            className="h-5 w-5 text-white text-md md:text-lg group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    )}
                                </span>
                                Kirish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
