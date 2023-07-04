import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RightArrow from "../Assets/Icons/RightArrow.svg";
function MenuItems({ title, path, subMenuItems }) {
  console.log(window.location.pathname);
  const [showSubMenuItem, setshowSubMenuItem] = useState(false);
  const handleSubMenuItems = () => {
    setshowSubMenuItem((prev) => !prev);
  };
  return (
    <div onClick={handleSubMenuItems}>
      <NavLink className="px-4 pt-[12px] pb-[12px] flex cursor-pointer text-theme-text-color font-medium items-center justify-between">
        <span
          className={`font-montserrat text-lg whitespace-nowrap  ${
            window?.location?.pathname === path
              ? "text-[#271E0D] font-semibold"
              : "text-[#7B7B7B]"
          }`}
        >
          {title}
        </span>
        <img
          src={RightArrow}
          alt=""
          style={{
            transform: showSubMenuItem ? "rotate(90deg)" : "rotate(0)",
            color: showSubMenuItem ? "#ccc" : "#7B7B7B",
          }}
        />
      </NavLink>

      {/************** Child Link ***************************/}
      {showSubMenuItem && (
        <div className="flex flex-col">
          {subMenuItems.map((list) => {
            return (
              <div
                className={`p-2 ${
                  window.location.pathname === list.to && "bg-[#FFF2EC]"
                }`}
              >
                <NavLink
                  className={`flex justify-start items-center gap-2 w-full p-1 pl-2 `}
                  to={list.to}
                >
                  {window.location.pathname === list.to ? (
                    <div className="h-[6px] w-[6px] bg-[#D0A34C] rounded-full"></div>
                  ) : (
                    <div className="w-[6px] bg-[#fff]"></div>
                  )}

                  <span
                    className={`text-theme-text-color hover:text-clr-hover cursor-pointer text-base w-max font-karla ${
                      window.location.pathname === list.to && "text-[#D0A34C]"
                    }`}
                  >
                    {list.label}
                  </span>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MenuItems;
