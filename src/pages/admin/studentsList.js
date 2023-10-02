import { useState, useEffect } from "react";
import React from "react";
import { UserService } from "../../services/userService";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgress } from "../../components/custom";
import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react";
import { ControlButton } from "../../components/custom/Button";

//the whole component
export default function StudentsList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);

  //states to manage pagination of studentlist
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(5);
  const [pageData, setPageData] = useState([]);

  //fetching student details
  useEffect(() => {
    const FetchStudents = async (data) => {
      try {
        const res = await UserService.findUsers({ role: "student" });
        console.log(res);
        setPageData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    FetchStudents();
  }, []);

  //handle navigation of pages to next || previous
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  //effect to mangage pagination of studentlist
  useEffect(() => {
    const slice = pageData.slice(offset, offset + perPage);
    setStudents(slice);
    setPageCount(Math.ceil(pageData.length / perPage));
  }, [pageData, offset]);

  return (
    <Wrapper className="d-flex flex-column">
      <div className="header p-5">
        <h4>List of Students</h4>
        <p>view and edit student(s) details here...</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {students.length > 0 ? (
        <>
          <div className="px-5 table-div">
            <Table className="table table-bordered">
              <thead className="">
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Admission Number</th>
                  <th>email</th>
                  <th>gender</th>
                  <th colSpan="3">Operations</th>
                </tr>
              </thead>
              {students.map((student) => (
                <tbody>
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.admissionNumber}</td>
                    <td>{student.email}</td>
                    <td>{student.gender}</td>

                    <td>
                      <Link to="">
                        <button className="update-button">update</button>
                      </Link>
                    </td>
                    <td>
                      <Link to="">
                        <button className="transfer-button">transfer</button>
                      </Link>
                    </td>
                    <td>
                      <Link to="">
                        <button
                          onClick={() => {
                            //  DeleteTeachers();
                            setOverlay(true);
                          }}
                          className="delete-button"
                        >
                          delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
          <ReactPaginate
            previousLabel={
              <ControlButton>
                <Icon icon="ooui:next-rtl" className="icon" />
              </ControlButton>
            }
            nextLabel={
              <ControlButton>
                <Icon icon="ooui:next-ltr" className="icon" />
              </ControlButton>
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination pl-5 align-items-center gap-2"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </>
      ) : (
        <div className="p-5">no details to display atm.</div>
      )}
      {overlay ? (
        <div className="overlay-wrapper d-flex ">
          <div
            className={`d-flex flex-column p-3 overlay-options ${
              overlay ? "open" : "close"
            }`}
          >
            <p>Are you sure you want to delete this teacher profile?</p>
            <div className=" buttons d-flex gap-3">
              <button className="left">yes</button>
              <button
                className="right"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;
