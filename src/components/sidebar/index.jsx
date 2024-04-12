

import SidebarLists from "./SidebarLists";
import { sidebarNavLists } from "./sidebarNavLists";

const Sidebar = () => {


    return (
        <nav className="mt-4">
            <ul className="flex flex-col gap-2 text-white">
                {sidebarNavLists.map((nav) => (
                    <SidebarLists {...nav} key={nav.id} />
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
