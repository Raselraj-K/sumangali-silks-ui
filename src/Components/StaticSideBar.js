import React from "react";
import HomeIcon from "../Assets/Icons/Home.svg";
import CRM from "../Assets/Icons/CRM.svg";
import FMS from "../Assets/Icons/FMS.svg";
import HRM from "../Assets/Icons/HRM.svg";
import IMS from "../Assets/Icons/IMS.svg";

function StaticSideBar() {
  return (
    <div className=" w-10 min-h-screen pt-3.5 p-3.5 border-r-[1px] border-border-color flex flex-col gap-5 justify-start">
      <div className="si-profile flex flex-col justify-center cursor-pointer">
        <img
          className="h-8 w-8 rounded-full"
          src="https://lh3.googleusercontent.com/ogw/AOLn63G_za-DTqZRehnaViBROuGguI69GAY7Q1ebdLULJw=s64-c-mo"
        />
        <span className="text-xs font-medium font-karla">Admin</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer ">
        <img className="h-6 w-6" src={HomeIcon} />
        <span className="text-xs font-medium font-karla">Home</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer ">
        <img className="h-5 w-5" src={IMS} />
        <span className="text-xs font-medium font-karla">IMS</span>
      </div>
      <div className="si-home flex flex-col justify-center  ">
        <img className="h-5 w-5" src={FMS} />
        <span className="text-xs font-medium font-karla">FMS</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer ">
        <img className="h-5 w-5" src={IMS} />
        <span className="text-xs font-medium font-karla">IMS</span>
      </div>
      <div className="si-home flex flex-col justify-center cursor-pointer ">
        <img className="h-5 w-5" src={CRM} />
        <span className="text-xs font-medium font-karla">CRM</span>
      </div>
    </div>
  );
}

export default StaticSideBar;
