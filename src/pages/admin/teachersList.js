import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../services/userService";
import toast from "react-hot-toast";
import { CircularProgress } from "../../components/custom";
import ReactPaginate from "react-paginate";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //pagination of teacherlist
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(2);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    const FetchTeachers = async (data) => {
      try {
        const res = await UserService.findUsers({ role: "teacher" });
        console.log(res);
        setPageData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    FetchTeachers();
  }, []);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  useEffect(() => {
    const slice = pageData.slice(offset, offset + perPage);
    setTeachers(slice);
    setPageCount(Math.ceil(pageData.length / perPage));
  }, [pageData, offset]);

  const DeleteTeachers = async (data) => {
    await UserService.deleteUser()
      .then((res) => {
        console.log(res);
        console.log(data);
        setOverlay(false);
        toast.success("teacher profile has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const EditTeachers = async () => {
    await UserService.updateUser().then((res) => {
      console.log(res);
      setTeacherDetails(res.data);
    });
  };
  return (
    <Wrapper className="d-flex flex-column">
      <div className="header p-5">
        <h4>List of Teachers</h4>
        <p>View and edit details of teachers</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {pageData.length > 0 ? (
        <div className="table-div px-5">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Teacher ID</th>
                <th>email</th>
                <th>telephone</th>
                <th colSpan="2">Operations</th>
              </tr>
            </thead>
            <tbody className="bg-transparent table-body">
              {teachers.map((teacher) => (
                <tr key={teacher._id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.tel}</td>

                  <td>
                    {" "}
                    <button onClick={EditTeachers}>Edit</button>{" "}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        setOverlay(true);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
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
              <button className="left" onClick={DeleteTeachers}>
                yes
              </button>
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
  .table-div {
    overflow-x: scroll;
  }
  .table {
  }
  .table-body {
    background: transparent !important;
  }
  .close {
  }
  .open {
  }
  .buttons {
    justify-content: right;
    width: 100%;
    .left {
      width: 70px;
      border: 0;
      border-radius: 10px;
      padding: 10px;
      color: white;
      background-color: blue;
    }
    .right {
      background-color: #f1f1f1;
      width: 50px;
      border: 0;
      border-radius: 10px;
      padding: 10px;
      color: red;
      &:hover {
        background-color: red;
        transition: 0.3s;
        color: white;
      }
    }
  }
`;
