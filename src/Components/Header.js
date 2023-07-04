import React from "react";
import Support from "../Assets/Icons/Support.svg";
import Setting from "../Assets/Icons/Setting.svg";
import Remainder from "../Assets/Icons/Remainder.svg";

function Header() {
  return (
    <div className="pt-[12px] pb-[12px] pl-[34px] pr-[34px] flex justify-between items-center border-b-[1px] border-border-color">
      <div>
        <span className="text-brand-name-color font-bold font-montserrat text-base">
          Sumangali Silks
        </span>
      </div>
      <div className="flex gap-6">
        <div className="flex justify-center items-center">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex justify-center items-center">
          <img src={Support} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Setting} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Remainder} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
