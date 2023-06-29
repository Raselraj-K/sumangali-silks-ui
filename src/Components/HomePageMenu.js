import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../Assets/Icons/RightArrow.svg";

function HomePageMenu() {
  const navLink = [
    {
      name: "Enterprise Master",
      //   event: handleEnterPriseMaster,
      id: "enterprise-master",
    },
    {
      name: "Employee master",
      //   event: handleEmployeeMaster,
      id: "employee-master",
    },
    {
      name: "Approval master",
      //   event: handleApprovalMaster,
      id: "approval-master",
    },
    {
      name: "User master",
      //   event: handleUserMaster,
      id: "user-master",
    },
    {
      name: "Finance master",
      //   event: handleFinanceMaster,
      id: "finance-master",
    },
  ];
  return (
    <div
      id="toggle-menu"
      className="w-2/12 p-1 flex flex-col gap-4 bg-[0px 4px 24px -8px]"
    >
      {navLink.map((link, i) => {
        return (
          <div key={i}>
            <Link
              key={i}
              className="p-2 flex justify-between cursor-pointer text-theme-text-color text-lg font-medium items-center"
            >
              <span className="hover:text-clr-hover">{link.name}</span>
              {link.name === "Enterprise Master" && (
                <span className="bg-new-tag text-xs p-1 rounded-sm text-white-color">
                  New
                </span>
              )}
              <img src={RightArrow} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePageMenu;
