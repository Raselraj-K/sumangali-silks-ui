import React from "react";
import { Link, NavLink } from "react-router-dom";
import RightArrow from "../Assets/Icons/RightArrow.svg";
import $ from "jquery";
function HomePageMenu() {
  const handleEnterPriseMaster = () => {
    $("#enterprise-master").toggle();
  };

  const handleEmployeeMaster = () => {
    $("#employee-master").toggle();
  };

  const sideMenu = [
    {
      label: "Enterprise Master",
      event: handleEnterPriseMaster,
      to: "/",
      id: "enterprise-master",
      children: [
        {
          label: "Floor",
          to: "/floor",
        },
        {
          label: "Branch",
          to: "/branch",
        },
        {
          label: "Department",
          to: "/department",
        },
        {
          label: "Designation",
          to: "/designation",
        },
        {
          label: "Shift",
          to: "/shift",
        },
        {
          label: "Break",
          to: "/break",
        },
      ],
    },
    {
      label: "Employee Master",
      event: handleEmployeeMaster,
      to: "/employee-master",
      id: "employee-master",
      children: [
        {
          label: "Employee Floor",
          to: "/employee-floor",
        },
        {
          label: "Employee Branch",
          to: "/employee-branch",
        },
        {
          label: "Employee Department",
          to: "/employee-department",
        },
        {
          label: "Employee Designation",
          to: "/employee-designation",
        },
        {
          label: "Employee Shift",
          to: "/employee-shift",
        },
        {
          label: "Employee Break",
          to: "/employee-break",
        },
      ],
    },
  ];

  return (
    <div
      id="toggle-menu"
      className="w-2/12 p-1 flex flex-col gap-4 bg-[0px 4px 24px -8px]"
    >
      {sideMenu.map((nav, i) => {
        return (
          <div key={i}>
            <Link
              onClick={() => {
                nav.event();
              }}
              key={i}
              className="p-2 flex justify-between cursor-pointer text-theme-text-color text-lg font-medium items-center"
            >
              <span>{nav.label}</span>
              {nav.label === "Enterprise Master" && (
                <span className="bg-new-tag text-xs p-1 rounded-sm text-white-color">
                  New
                </span>
              )}
              <img src={RightArrow} alt="" />
            </Link>
            <div className="flex flex-col ml-5 hidden" id={nav.id}>
              {nav.children.map((list) => {
                return (
                  <div className="flex justify-start items-center w-max gap-2">
                    <NavLink
                      style={({ isActive }) => ({
                        height: isActive && "4px",
                        background: isActive && "#D0A34C",
                        padding: isActive && "2px",
                        width: "maxContent",
                        borderRadius: "2px",
                      })}
                    ></NavLink>
                    <span className="text-theme-text-color hover:text-clr-hover cursor-pointer text-base w-max">
                      {list.label}
                    </span>
                    {list.label === "Branch" && (
                      <span className="bg-new-tag text-xs p-1 rounded-sm text-white-color">
                        New
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePageMenu;
