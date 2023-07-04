import React from "react";

import $ from "jquery";
import MenuItems from "./MenuItems";
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
      to: "/",

      children: [
        {
          label: "Floor",
          to: "/floor",
        },
        {
          label: "Branch",
          to: "/",
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

      to: "/employee-master",

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
    <div className="w-[20%] " id="toggle-menu">
      <div className="font-montserrat font-bold	text-sm pl-[8px] pr-[8px] pt-[24px] text-[#494C54]">
        HRMS Masters
      </div>
      <div className="flex flex-col gap-1">
        {sideMenu.map((nav, i) => {
          return (
            <div key={i}>
              <MenuItems
                title={nav.label}
                path={nav.to}
                subMenuItems={nav.children}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageMenu;
