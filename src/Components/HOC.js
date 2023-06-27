import React from "react";
import Header from "./Header";
import StaticSideBar from "./StaticSideBar";

function HOC(WrappedComponent) {
  return class HOC extends React.Component {
    render() {
      return (
        <div className="flex w-full">
          <StaticSideBar />
          <div className=" w-90 min-h-screen">
            <Header />
            <WrappedComponent />
          </div>
        </div>
      );
    }
  };
}

export default HOC;
