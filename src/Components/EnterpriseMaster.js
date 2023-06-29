import React, { useState } from "react";
import Add from "../Assets/Icons/Add.svg";
import Filter from "../Assets/Icons/Filter.svg";
import Config from "../Assets/Icons/Config.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import More from "../Assets/Icons/More.svg";
import Toggle from "../Assets/Icons/Toggle.svg";
import { Link } from "react-router-dom";
import $ from "jquery";
import HOC from "./HOC";
import HomeHOC from "./HomeHOC";
import { useNavigate } from "react-router-dom";

function EnterpriseMaster() {
  const navigate = useNavigate();
  const [filter, setfilter] = useState(false);
  const handleChangePage = () => {
    return;
  };
  const showBranchDetails = (id) => {
    navigate("/branch-details");
  };
  const header = [
    "S.no",
    "Branch Name",
    "Branch ID",
    "Parent",
    "Created at",
    "",
  ];
  const list = [
    {
      id: "01",
      branch_name: "Sumangali Silks",
      branch_id: "#BR00101",
      parent: "Sumangali Silks",
      created_at: "May 12, 2023",
    },
    {
      id: "02",
      branch_name: "Boys & Silks",
      branch_id: "#BR00102",
      parent: "Sumangali Silks",
      created_at: "May 12, 2023",
    },
    {
      id: "03",
      branch_name: "Sumangali textile",
      branch_id: "#BR00103",
      parent: "Sumangali Silks",
      created_at: "May 12, 2023",
    },
    {
      id: "04",
      branch_name: "Sumangali Silks",
      branch_id: "#BR00104",
      parent: "Sumangali Silks",
      created_at: "May 12, 2023",
    },
  ];
  const handleToggle = () => {
    $("#toggle-menu").animate({
      width: "toggle",
    });
  };
  return (
    <div className="grow bg-[#F7F6F4]">
      <img src={Toggle} className="cursor-pointer" onClick={handleToggle} />
      <div className="p-5 ">
        <div className="flex justify-between">
          <div>
            <span className="text-[#271E0D] text-base font-semibold	">
              Branch & Floor
            </span>
          </div>

          <Link
            to="branch-create"
            className="flex items-center gap-2 border-solid border-[2px] border-[#D9D9D9] p-1 rounded"
          >
            <span className="text-[#494C54] text-base font-medium	">
              Add New
            </span>
            <img src={Add} alt="" />
          </Link>
        </div>
        <div className="bg-[#fff] mt-5 shadow-sm rounded">
          <h4 className="text-[#271E0D] text-sm font-semibold p-2 border-b-[1px] border-b-[#D9D9D9]">
            Branch List
          </h4>
          <div className="flex justify-end p-3 gap-2">
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={() => {
                setfilter((prev) => !prev);
              }}
            >
              <span className="text-[#494C54] text-sm	font-medium">Filter</span>
              <img src={Filter} alt="" />
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <span className="text-[#494C54] text-sm	font-medium">Config</span>
              <img src={Config} alt="" />
            </div>
          </div>

          {/* Filter */}
          {filter ? (
            <div className="flex p-3 flex-wrap justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[#271E0D] text-base	">
                  Branch Name
                  <span className="font-bold" style={{ color: "#FF5C42" }}>
                    *
                  </span>
                </span>
                <input
                  type="text"
                  className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded"
                  placeholder="Enter name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#271E0D] text-base	">
                  Branch ID{" "}
                  <span className="font-bold" style={{ color: "#FF5C42" }}>
                    *
                  </span>
                </span>
                <input
                  type="text"
                  placeholder="Enter ID"
                  className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#271E0D] text-base	">
                  Parent{" "}
                  <span className="font-bold" style={{ color: "#FF5C42" }}>
                    *
                  </span>
                </span>
                <select className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded">
                  <option value="">Select Parent</option>
                  <option>Parent-1</option>
                  <option>Parent-2</option>
                  <option>Parent-3</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Table */}
          <div>
            <TableContainer>
              <Table
                sx={{ minWidth: 500 }}
                aria-label="custom pagination table"
              >
                <TableBody>
                  <TableRow style={{ backgroundColor: "#FFE5B4" }}>
                    {header.map((name, i) => {
                      return (
                        <TableCell
                          key={i}
                          component="th"
                          scope="row"
                          style={{ color: "#343A40", fontWeight: "700" }}
                        >
                          {name}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {list.map((item, i) => {
                    return (
                      <TableRow
                        key={i}
                        className="cursor-pointer"
                        onClick={showBranchDetails}
                      >
                        <TableCell
                          style={{
                            textAlign: "left",
                            color: "#7B7B7B",
                          }}
                        >
                          {item.id}
                        </TableCell>
                        <TableCell
                          style={{ textAlign: "left", color: "#7B7B7B" }}
                        >
                          {item.branch_name}
                        </TableCell>
                        <TableCell
                          style={{ textAlign: "left", color: "#7B7B7B" }}
                        >
                          {item.branch_id}
                        </TableCell>
                        <TableCell
                          style={{ textAlign: "left", color: "#7B7B7B" }}
                        >
                          {item.parent}
                        </TableCell>
                        <TableCell
                          style={{ textAlign: "left", color: "#7B7B7B" }}
                        >
                          {item.created_at}
                        </TableCell>
                        <TableCell style={{ cursor: "pointer" }}>
                          <img src={More} alt="" />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  count={10}
                  rowsPerPage={10}
                  page={1}
                  onPageChange={handleChangePage}
                />
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const WrappedHome1 = HOC(EnterpriseMaster);
const WrappedHome2 = HomeHOC(WrappedHome1);
export default WrappedHome2;
