import React from "react";
import HOC from "./HOC";
import { Link } from "react-router-dom";
import View from "../Assets/Icons/View.svg";
import Edit from "../Assets/Icons/Edit.svg";
import HomeHOC from "./HomeHOC";
import Toggle from "../Assets/Icons/Toggle.svg";
import $ from "jquery";

function BranchDetails() {
  const Details = [
    {
      label: "Branch Name",
      value: "Sumangali Silks",
    },
    {
      label: "Branch ID",
      value: "#BR00101",
    },
    {
      label: "No.of.Floors",
      value: 5,
    },
    {
      label: "Address Line 1",
      value: "No.78, Lawrence Rd",
    },
    {
      label: "Address Line 2",
      value: "Trichy",
    },
    {
      label: "Town / City",
      value: "Trichy",
    },
    {
      label: "State",
      value: "Tamilnadu",
    },
    { label: "Pin Code", value: 6 },
    {
      label: "Head Branch",
      value: "Chennai",
    },
  ];
  const handleToggle = () => {
    $("#toggle-menu").animate({
      width: "toggle",
    });
  };
  return (
    <div className="grow bg-[#F7F6F4]">
      <img
        src={Toggle}
        alt=""
        className="cursor-pointer"
        onClick={handleToggle}
      />
      <div className="flex w-100 h-screen grow">
        <div className="grow bg-[#F7F6F4] h-100 p-5">
          <div className="flex justify-between">
            <div>
              <span className="text-[#271E0D] text-base font-semibold	text-2xl font-montserrat">
                Branch
              </span>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 border-solid border-[2px] border-[#D9D9D9] p-1 rounded"
            >
              <span className="text-[#494C54] text-lg font-medium font-montserrat	">
                View List
              </span>
              <img src={View} alt="" />
            </Link>
          </div>
          <div className="bg-[#fff] mt-5 shadow-sm rounded">
            <h4 className="text-[#271E0D] text-sm font-semibold p-2 border-b-[1px] border-b-[#D9D9D9] font-montserrat">
              Branch Details
            </h4>
            <Link
              to="/branch-edit"
              className="flex justify-end p-3 cursor-pointer gap-2 items-center"
            >
              <span className="text-[#494C54] text-xl	font-medium font-montserrat">
                Edit
              </span>
              <img src={Edit} alt="" />
            </Link>
            <div class="p-2 grid grid-cols-3 gap-5">
              {Details.map((list) => {
                return (
                  <div className="flex flex-col gap-1">
                    <label className="text-[#271E0D] text-base font-medium font-montserrat">
                      {list.label}
                    </label>
                    <div
                      style={{ wordBreak: "break-word" }}
                      className="text-[#7B7B7B] text-base font-karla"
                    >
                      {list.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const BranchDetailsComp = HOC(BranchDetails);

const WrappedHome = HomeHOC(BranchDetailsComp);
export default WrappedHome;
