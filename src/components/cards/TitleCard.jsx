/* eslint-disable react/prop-types */

import Subtitle from "../typography/Subtitle";

function TitleCard({topMargin,TopSideButtons,headLine,children,title}) {
 
  
  return (
    <div
      className={
        "card w-full p-4 bg-base-100 min-h-[80vh]  shadow-xl bg-white " + (topMargin || "mt-2 ")
      }
    >
      <Subtitle
        styleClass={
          "flex gap-2 flex-wrap content-start  items-center justify-between"
        }
      >
        <span className="text-xl md:text-2xl"> {headLine || title}</span>
        <div className="flex flex-wrap content-start items-center gap-3">
     
          {TopSideButtons && TopSideButtons}
        </div>
      </Subtitle>

      <div className="divider mt-1"></div>

      <div className=" w-full pb-4 bg-base-100">{children}</div>
    </div>
  );
}

export default TitleCard;
