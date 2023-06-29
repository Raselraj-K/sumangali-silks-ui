import React from "react";
import HomeIcon from "../Assets/Icons/Home.svg";
import CRM from "../Assets/Icons/CRM.svg";
import FMS from "../Assets/Icons/FMS.svg";
import IMS from "../Assets/Icons/IMS.svg";
import { NavLink } from "react-router-dom";

function StaticSideBar() {
  const sideBar = [
    {
      label: "Home",
      icon: HomeIcon,
      to: "/",
    },
    {
      label: "IMS",
      icon: IMS,
      to: "IMS",
    },
    {
      label: "FMS",
      icon: FMS,
      to: "FMS",
    },
    {
      label: "IMS",
      icon: IMS,
      to: "IMS",
    },
    {
      label: "CRM",
      icon: CRM,
      to: "CRM",
    },
  ];

  return (
    <div className=" w-10 min-h-screen pt-3.5 pl-1.5 pr-1.5 border-r-[1px] border-border-color flex flex-col gap-5 justify-start">
      <div className=" flex flex-col justify-center cursor-pointer items-center">
        <img
          className="h-8 w-8 rounded-full"
          src="https://lh3.googleusercontent.com/ogw/AOLn63G_za-DTqZRehnaViBROuGguI69GAY7Q1ebdLULJw=s64-c-mo"
          alt=""
        />
        <span className="text-xs font-medium font-karla">Admin</span>
      </div>
      {sideBar.map((list) => {
        return (
          <NavLink
            to={list.label === "Admin" ? "admin" : list.to}
            style={({ isActive }) => ({
              color: isActive && "#D0A34C",
              background: isActive && "#FFF2EC",
            })}
            className="transition duration-400 hover:scale-110 p-1 flex flex-col rounded justify-center cursor-pointer items-center"
          >
            <img className={`h-6 w-6 `} src={list.icon} alt="" />
            <span className="text-xs font-medium font-karla">{list.label}</span>
          </NavLink>
        );
      })}
      {/* <div className="si-profile flex flex-col justify-center cursor-pointer items-center">
        <img
          className="h-8 w-8 rounded-full"
          src="https://lh3.googleusercontent.com/ogw/AOLn63G_za-DTqZRehnaViBROuGguI69GAY7Q1ebdLULJw=s64-c-mo"
          alt=""
        />
        <span className="text-xs font-medium font-karla">Admin</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer items-center ">
        <img className="h-6 w-6" src={HomeIcon} alt="" />
        <span className="text-xs font-medium font-karla">Home</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer items-center ">
        <img className="h-5 w-5" src={IMS} alt="" />
        <span className="text-xs font-medium font-karla">IMS</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer items-center ">
        <img className="h-5 w-5" src={FMS} alt="" />
        <span className="text-xs font-medium font-karla">FMS</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer items-center ">
        <img className="h-5 w-5" src={IMS} alt="" />
        <span className="text-xs font-medium font-karla">IMS</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer items-center ">
        <img className="h-5 w-5" src={CRM} alt="" />
        <span className="text-xs font-medium font-karla">CRM</span>
      </div> */}
    </div>
  );
}
export default StaticSideBar;
