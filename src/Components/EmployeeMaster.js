import React from "react";
import HOC from "./HOC";

function EmployeeMaster() {
  const enterpriseMasterSubMenu = ["1", "2", "3", "4", "5"];
  return (
    <div>
      {enterpriseMasterSubMenu.map((item, i) => {
        return <div>branch & floor</div>;
      })}
    </div>
  );
}
const EmployeeMasterComp = HOC(EmployeeMaster);
export default EmployeeMasterComp;
