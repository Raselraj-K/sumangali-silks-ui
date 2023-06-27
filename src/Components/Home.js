import React from "react";
import HOC from "./HOC";
import { Link } from "react-router-dom";
import RightArrow from "../Assets/Icons/RightArrow.svg";

function Home() {
  const handleEnterPriseMaster = () => {
    console.log("ok");
  };
  const handleEmployeeMaster = () => {};
  const handleApprovalMaster = () => {};
  const handleUserMaster = () => {};
  const handleFinanceMaster = () => {};
  const navLink = [
    {
      name: "Enterprise Master",
      event: handleEnterPriseMaster,
    },
    {
      name: "Employee master",
      event: handleEmployeeMaster,
    },
    {
      name: "Approval master",
      event: handleApprovalMaster,
    },
    {
      name: "User master",
      event: handleUserMaster,
    },
    {
      name: "Finance master",
      event: handleFinanceMaster,
    },
  ];
  const enterpriseMasterSubMenu = [
    "Branch & Floor",
    "Department",
    "Designation",
    "Shift",
    "Break",
  ];

  return (
    <div className="flex w-100 h-screen">
      <div className="w-3/12 p-3 flex flex-col gap-4">
        {navLink.map((link, i) => {
          return (
            <div>
              <Link
                key={i}
                onClick={link.event}
                className="p-2 flex justify-between cursor-pointer text-theme-text-color text-lg font-medium"
              >
                {link.name}
                {link.name === "Enterprise Master" ? (
                  <span className="bg-new-tag text-xs p-1 rounded-sm text-white-color">
                    New
                  </span>
                ) : (
                  ""
                )}
                <img src={RightArrow} alt="" />
              </Link>
              <div>
                {enterpriseMasterSubMenu.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      className="p-2 flex justify-between cursor-pointer text-theme-text-color text-sm font-medium"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-3/4"></div>
    </div>
  );
}
const WrappedHome = HOC(Home);
export default WrappedHome;
