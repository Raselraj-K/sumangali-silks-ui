import React from "react";
import HomePageMenu from "./HomePageMenu";
import HOC from "./HOC";
import { Link } from "react-router-dom";
import View from "../Assets/Icons/View.svg";
import Edit from "../Assets/Icons/Edit.svg";
import HomeHOC from "./HomeHOC";

function BranchAndFloorDetails() {
  const Details = [
    { label: "Branch Name", value: "Sumangali Silks" },
    { label: "Branch ID", value: "#BR00101" },
    { label: "No.of.Floors", value: 6 },
    { label: "Address Line 1", value: "No.78, Lawrence Rd" },
    { label: "Address Line 2", value: "Trichy" },
    { label: "Town / City", value: "Trichy" },
    { label: "State", value: "Tamilnadu" },
    { label: "Pin Code", value: 689789 },
    { label: "Head Branch", value: "Chennai" },
  ];
  return (
    <div className="flex w-100 h-screen grow">
      <div className="grow bg-[#F7F6F4] h-100 p-5">
        <div className="flex justify-between">
          <div>
            <span className="text-[#271E0D] text-base font-semibold	">
              Branch & Floor
            </span>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 border-solid border-[2px] border-[#D9D9D9] p-1 rounded"
          >
            <span className="text-[#494C54] text-base font-medium	">
              View List
            </span>
            <img src={View} alt="" />
          </Link>
        </div>
        <div className="bg-[#fff] mt-5 shadow-sm rounded">
          <h4 className="text-[#271E0D] text-sm font-semibold p-2 border-b-[1px] border-b-[#D9D9D9]">
            Branch Details
          </h4>
          <Link
            to="/branch-edit"
            className="flex justify-end p-3 cursor-pointer gap-2"
          >
            <span className="text-[#494C54] text-sm	font-medium">Edit</span>
            <img src={Edit} alt="" />
          </Link>
          <div class="p-2 grid grid-cols-3 gap-5">
            {Details.map((list) => {
              return (
                <div className="flex flex-col gap-1">
                  <label className="text-[#271E0D] text-base font-medium">
                    {list.label}
                  </label>
                  <span className="text-[#7B7B7B] text-base">{list.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const BranchAndFloorDetailsComp = HOC(BranchAndFloorDetails);

const WrappedHome = HomeHOC(BranchAndFloorDetailsComp);
export default WrappedHome;
