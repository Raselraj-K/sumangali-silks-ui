import React from "react";
import HOC from "./HOC";
import HomeHOC from "./HomeHOC";
import BranchList from "./BranchList";

function Home() {
  return (
    <>
      <BranchList />
    </>
  );
}
const WrappedHome1 = HOC(Home);
const WrappedHome2 = HomeHOC(WrappedHome1);
export default WrappedHome2;
