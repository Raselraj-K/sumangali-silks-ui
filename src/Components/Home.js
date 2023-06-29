import React from "react";
import HOC from "./HOC";
import HomeHOC from "./HomeHOC";
import EnterpriseMaster from "./EnterpriseMaster";

function Home() {
  return (
    <>
      <EnterpriseMaster />
    </>
  );
}
const WrappedHome1 = HOC(Home);
const WrappedHome2 = HomeHOC(WrappedHome1);
export default WrappedHome2;
