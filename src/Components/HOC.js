import React from "react";
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
