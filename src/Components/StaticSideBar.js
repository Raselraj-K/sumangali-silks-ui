import React from "react";
import HomeIcon from "../Assets/Icons/Home.svg";
import ActiveHome from "../Assets/Icons/ActiveHome.svg";
import CRM from "../Assets/Icons/CRM.svg";
import ActiveCRM from "../Assets/Icons/ActiveCRM.svg";
import FMS from "../Assets/Icons/FMS.svg";
import ActiveFMS from "../Assets/Icons/ActiveFMS.svg";
import IMS from "../Assets/Icons/IMS.svg";
import ActiveIMS from "../Assets/Icons/ActiveIMS.svg";
import HRMS from "../Assets/Icons/HRMS.svg";
import ActiveHRMS from "../Assets/Icons/ActiveHRMS.svg";
import { NavLink } from "react-router-dom";

function StaticSideBar() {
  const sideBar = [
    {
      label: "Home",
      icon: HomeIcon,
      activeIcon: ActiveHome,
      to: "/",
    },
    {
      label: "HRMS",
      icon: HRMS,
      activeIcon: ActiveHRMS,
      to: "HRMS",
    },
    {
      label: "IMS",
      icon: IMS,
      activeIcon: ActiveIMS,
      to: "IMS",
    },
    {
      label: "FMS",
      icon: FMS,
      activeIcon: ActiveFMS,
      to: "FMS",
    },

    {
      label: "CRM",
      icon: CRM,
      activeIcon: ActiveCRM,
      to: "CRM",
    },
  ];

  return (
    <div className=" w-[80px] min-h-screen p-[11px] border-r-[1px] border-border-color flex flex-col gap-5 justify-start">
      <div className=" flex flex-col justify-center cursor-pointer items-center gap-2">
        <img
          className="rounded-full w-[52px]"
          src="https://lh3.googleusercontent.com/ogw/AOLn63G_za-DTqZRehnaViBROuGguI69GAY7Q1ebdLULJw=s64-c-mo"
          alt=""
        />
        <span className="text-xs font-semibold font-karla">Admin</span>
      </div>
      {sideBar.map((list) => {
        return (
          <NavLink
            className="hover:bg-[#FFF2EC]  rounded-[6px] "
            to={list.label === "Admin" ? "admin" : list.to}
            style={({ isActive }) => ({
              color: isActive && "#D0A34C",
              background: isActive && "#FFF2EC",
            })}
          >
            <div className="py-1.5 flex flex-col items-center gap-1.5">
              {window?.location?.pathname === list?.to ? (
                <img className={`h-6 w-6 `} src={list.activeIcon} alt="" />
              ) : (
                <img className={`h-6 w-6 `} src={list.icon} alt="" />
              )}
              <span
                style={{
                  fontWeight: window?.location?.pathname === list?.to && "600",
                }}
                className="text-xs font-normal font-karla hover:font-semibold "
              >
                {list.label}
              </span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
export default StaticSideBar;
