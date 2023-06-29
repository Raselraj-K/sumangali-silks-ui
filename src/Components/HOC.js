import React from "react";
import Header from "./Header";
import StaticSideBar from "./StaticSideBar";
import BranchList from "./BranchList";
import HomePageMenu from "./HomePageMenu";

function HOC(WrappedComponent) {
  return class HOC extends React.Component {
    render() {
      return (
        <div className="w-full flex grow">
          <HomePageMenu />
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default HOC;
