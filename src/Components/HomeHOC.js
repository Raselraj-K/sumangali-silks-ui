import React from "react";
import Header from "./Header";
import StaticSideBar from "./StaticSideBar";

function HomeHOC(WrappedComponent) {
  return class HomeHOC extends React.Component {
    render() {
      return (
        <div className="flex">
          <StaticSideBar />
          <div className="grow">
            <Header />
            <WrappedComponent />
          </div>
        </div>
      );
    }
  };
}

export default HomeHOC;
