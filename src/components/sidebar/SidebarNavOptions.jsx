/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
function SidebarNavOptions({ name, path, Icon }) {


    return (
        <li key={name}>
            <NavLink
                to={path}
                className={({ isActive }) => {
                    const activeClass = isActive ? "bg-indigo-700" : "";
                    return `px-4 flex items-center justify-between py-3 ${activeClass} hover:bg-indigo-700`;
                }}
            >
                <div className="flex items-center">
                    {/* {icon} */}
                    <Icon/>
                    <span className="ml-2 text-sm text-white">{name}</span>
                </div>
            </NavLink>
        </li>
    );
}


export default SidebarNavOptions;

