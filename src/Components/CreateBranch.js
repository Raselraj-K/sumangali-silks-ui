import React from "react";
import HOC from "./HOC";
import HomePageMenu from "./HomePageMenu";
import { Link } from "react-router-dom";
import View from "../Assets/Icons/View.svg";
import Config from "../Assets/Icons/Config.svg";
import Save from "../Assets/Icons/Save.svg";
function CreateBranch() {
  const Labels = [
    "Branch Name",
    "Branch ID",
    "No.of.Floors",
    "Address Line 1",
    "Address Line 2",
    "Town / City",
    "State",
    "Pin Code",
    "Head Branch",
  ];
  return (
    <div className="flex w-100 h-screen">
      <HomePageMenu />
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
            Add Branch
          </h4>
          <div className="flex justify-end p-3 cursor-pointer gap-2">
            <span className="text-[#494C54] text-sm	font-medium">Config</span>
            <img src={Config} alt="" />
          </div>
          <div class="p-2 grid grid-cols-3 gap-5">
            {Labels.map((name) => {
              return (
                <div className="flex flex-col gap-1">
                  <label className="text-[#271E0D] text-base font-medium">
                    {name}
                    <span className="font-bold" style={{ color: "#FF5C42" }}>
                      *
                    </span>
                  </label>
                  {name === "No.of.Floors" || name === "Head Branch" ? (
                    <select className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded">
                      <option>Branch-1</option>
                      <option>Branch-1</option>
                      <option>Branch-3</option>
                      <option>Branch-1</option>
                    </select>
                  ) : (
                    <input
                      className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded"
                      type="text"
                      placeholder="Enter Name"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-end p-2 gap-2">
            <button className="p-1 rounded flex gap-1 justify-center items-center bg-save-clr">
              <span className="text-sm font-semibold text-[#fff]">Save</span>
              <img src={Save} />
            </button>
            <button className="border-[2px] border-[#D9D9D9] rounded p-1">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const CreatBranchComp = HOC(CreateBranch);
export default CreatBranchComp;
