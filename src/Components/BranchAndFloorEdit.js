import React from "react";
import HOC from "./HOC";
import HomePageMenu from "./HomePageMenu";

function BranchAndFloorEdit() {
  return (
    <div className="flex w-100 h-screen">
      <HomePageMenu />
      <div className="grow bg-[#F7F6F4] h-100 p-5"></div>
    </div>
  );
}

const BranchAndFloorEditComp = HOC(BranchAndFloorEdit);

export default BranchAndFloorEditComp;
