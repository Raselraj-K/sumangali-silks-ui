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
import Footer from "./Footer";

function BranchList() {
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
    <div className="grow">
      <div className=" bg-[#F7F6F4]  h-screen">
        <img
          src={Toggle}
          alt=""
          className="cursor-pointer"
          onClick={handleToggle}
        />
        <div className="pt-[8px] pl-[20px] pr-[20px]">
          <div className="flex justify-between items-center ">
            <div>
              <span className="text-[#271E0D] text-2xl	font-semibold	font-montserrat">
                Branch
              </span>
            </div>

            <Link
              to="branch-create"
              className="flex items-center gap-2 border-solid border-[2px] border-[#D9D9D9] pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded"
            >
              <span className="text-[#494C54] text-lg font-medium font-montserrat">
                Add New
              </span>
              <img src={Add} alt="" />
            </Link>
          </div>
          <div className="bg-[#fff] mx-2 mt-[32px] shadow-sm rounded">
            <h4 className="text-[#271E0D] text-xl font-semibold pt-[16px] pb-[16px] pl-[24px] pr-[24px] border-b-[1px] border-b-[#D9D9D9] font-montserrat">
              Branch List
            </h4>
            <div className="flex justify-end py-6 px-6 gap-8">
              <div
                className="flex gap-2 items-center cursor-pointer "
                onClick={() => {
                  setfilter((prev) => !prev);
                }}
              >
                <span className="text-[#494C54] text-xl	font-medium font-montserrat">
                  Filter
                </span>
                <img src={Filter} alt="" />
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <span className="text-[#494C54] text-xl	font-medium font-montserrat">
                  Config
                </span>
                <img src={Config} alt="" />
              </div>
            </div>

            {/**************** * Filter *********************/}
            {filter ? (
              <div className="flex pl-[24px] pr-[24px] pb-[32px] flex-wrap w-full gap-x-8">
                <div className="flex flex-col gap-1 w-[30%]">
                  <span className="text-[#271E0D] text-base	font-montserrat font-medium	">
                    Branch Name
                  </span>
                  <input
                    type="text"
                    className="p-1 border-solid border-[2px] border-[#D9D9D9] rounded"
                    placeholder="Enter name"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-1 w-[30%]">
                  <span className="text-[#271E0D] text-base	font-medium	">
                    Head Branch
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

            {/**************** * Table ********************/}
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
                            style={{
                              color: "#271E0D",
                              fontWeight: "600",
                              fontFamily: "Montserrat",
                              fontSize: "18px",
                            }}
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
                              fontFamily: "karla",
                            }}
                          >
                            {item.id}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "left",
                              color: "#7B7B7B",
                              fontFamily: "karla",
                            }}
                          >
                            {item.branch_name}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "left",
                              color: "#7B7B7B",
                              fontFamily: "karla",
                            }}
                          >
                            {item.branch_id}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "left",
                              color: "#7B7B7B",
                              fontFamily: "karla",
                            }}
                          >
                            {item.parent}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "left",
                              color: "#7B7B7B",
                              fontFamily: "karla",
                            }}
                          >
                            {item.created_at}
                          </TableCell>
                          <TableCell
                            style={{ cursor: "pointer", textAlign: "right" }}
                          >
                            <img src={More} alt="" className="float-right" />
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
    </div>
  );
}

const WrappedHome1 = HOC(BranchList);
const WrappedComponent = HomeHOC(WrappedHome1);
export default WrappedComponent;
