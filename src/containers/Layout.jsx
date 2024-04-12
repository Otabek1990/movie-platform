/* eslint-disable react/prop-types */
import { useEffect, useRef, Fragment } from "react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import Sidebar from "@/components/sidebar";
// import { removeNotificationMessage } from "../features/headerSlice";
// import {
//   NotificationContainer,
// } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ModalLayout from "./ModalLayout";




const Layout = ({ setToken }) => {


    // const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const asideRef = useRef(null);
    const asideMask = useRef(null);

    const toggleAside = () => {
        const asideClassList = asideRef.current?.classList;
        const asideMaskClassList = asideMask.current?.classList;

        asideClassList?.toggle("-translate-x-full");
        asideClassList?.toggle("lg:-ml-[250px]");

        if (asideMaskClassList?.contains("invisible")) {
            asideMaskClassList?.remove("invisible", "opacity-0");
            asideMaskClassList?.add("visible", "opacity-50");
        } else {
            asideMaskClassList?.add("invisible", "opacity-0");
            asideMaskClassList?.remove("visible", "opacity-50");
        }
    };

    useEffect(() => {
        const asideClassList = asideRef.current?.classList;
        const asideMaskClassList = asideMask.current?.classList;
        if (asideMaskClassList?.contains("visible")) {
            asideMaskClassList?.add("invisible", "opacity-0");
            asideMaskClassList?.remove("visible", "opacity-50");
            asideClassList?.toggle("-translate-x-full");
        }
    }, [location]);





    return (
        <>
            <div className="bg-gray-100 flex min-h-screen w-full lg:h-auto">
                <aside
                    className="h-full overflow-auto overscroll-none z-20 fixed top-0 left-0 bg-indigo-600 w-[250px] -translate-x-full transition-all duration-500 ease-in-out lg:h-auto lg:static lg:translate-x-0 lg:shrink-0 lg:shadow-2xl lg:shadow-indigo-600"
                    ref={asideRef}
                >
                    <div className="h-16 flex justify-start pl-4 items-center shadow-md">
                        <Link to="/" className="text-white text-2xl font-medium">
                            Liger Cinema
                        </Link>
                    </div>
                    <Sidebar />
                </aside>
                <div className="w-full lg:w-auto lg:grow">
                    <header className="bg-white h-16 flex justify-between items-center p-4 shadow">
                        <Bars3Icon
                            className="h-6 w-6 stroke-indigo-600 lg:cursor-pointer"
                            onClick={toggleAside}
                        />
                        <form className="group relative ml-2 mr-auto">
                            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-indigo-500" />
                            <input
                                className="focus:ring-2 focus:ring-indigo-600 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 border-none w-36 md:w-96"
                                type="text"
                                aria-label="Search"
                                placeholder="Qidirish"
                            />
                        </form>
                        <div className="flex gap-4 items-center">
                            <Popover className="relative">
                                <Popover.Button className="flex items-center gap-2 outline-none">

                                    {/* <span className="text-sm text-gray-600">{auth.user}</span> */}
                                    <span className="text-sm text-gray-600 font-semibold">Admin</span>
                                    <ChevronDownIcon className="w-4 h-4 stroke-gray-400 stroke-2" />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-3 md:w-[16rem] w-[10rem] max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">

                                        <div className="overflow-hidden  rounded-lg shadow-lg bg-slate-100">
                                            <div className="p-4 cursor-pointer">
                                                <button
                                                    className="p-2 text-center whitespace-nowrap w-full rounded-md bg-red-400 text-white"
                                                    onClick={() => {
                                                        navigate("/login")
                                                        localStorage.clear()
                                                        setToken("")
                                                        // auth.signout(() => {
                                                        //     navigate("/sign-in", { replace: true });
                                                        //     window.localStorage.removeItem("user");
                                                        //     window.localStorage.removeItem("refresh-token");
                                                        //     window.localStorage.removeItem("access-token");
                                                        // });
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </div>
                    </header>
                    <main className="p-4">
                        <Outlet />
                    </main>
                </div>
                <div
                    className={`bg-black h-screen w-screen fixed top-0 left-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden`}
                    onClick={toggleAside}
                    ref={asideMask}
                ></div>
            </div>


            {/* <NotificationContainer /> */}

            <ModalLayout />
        </>
    );
};

export default Layout;
