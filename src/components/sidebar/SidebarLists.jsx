import { } from "react";
import PropTypes from "prop-types"
import SidebarNavOptions from "./SidebarNavOptions";





const SidebarLists = ({items,title}) => {
  return (
    <li>
      <div className="text-sm text-white font-bold my-2 ml-4">{title}</div>
      <ul>
        {items.map(navItem =>
          <SidebarNavOptions {...navItem} key={navItem.id} />
        )}
      </ul>
    </li>
  );
};

export default SidebarLists;
SidebarLists.propTypes={
    items:PropTypes.array,
    title:PropTypes.string
}

