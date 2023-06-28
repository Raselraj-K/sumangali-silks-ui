import React from "react";
import HOC from "./HOC";
import EnterpriseMaster from "./EnterpriseMaster";
import HomePageMenu from "./HomePageMenu";

function Home() {
  return (
    <div className="flex w-100 h-screen">
      <HomePageMenu />
      <div className="grow bg-[#F7F6F4] h-100">
        <EnterpriseMaster />
      </div>
    </div>
  );
}
const WrappedHome = HOC(Home);
export default WrappedHome;
