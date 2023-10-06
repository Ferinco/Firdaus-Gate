import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../services/userService";
import toast from "react-hot-toast";
import { CircularProgress } from "../../components/custom";
import ReactPaginate from "react-paginate";
import { deleteUser, fetchUsers } from "../../redux/slices/users";
import { Icon } from "@iconify/react";
import { ControlButton } from "../../components/custom/Button";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();

  //states to manage pagination of teacherlist
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(5);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    dispatch(fetchUsers({ role: "teacher" }));
  }, []);
  const { users, isLoading } = useSelector((state) => state.users);

  //handle navigation of pages to next || previous
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    const slice = users.slice(offset, offset + perPage);
    setTeachers(slice);
    setPageCount(Math.ceil(users.length / perPage));
  }, [users, offset]);

  const handleDeleteUser = async (id) => {
    dispatch(deleteUser({ id: id }))
      .unwrap()
      .then((res) => {
        console.log(res);
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
      {users.length > 0 ? (
        <>
          <div className="table-div px-5">
            <Table className="table table-bordered">
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
                      <button onClick={EditTeachers} className="update-button">
                        Edit
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          setOverlay(true);
                          setDeleteId(teacher._id);
                        }}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
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
              <button
                className="left"
                onClick={() => handleDeleteUser(deleteId)}
              >
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
      padding: 7px;
      color: white;
      background-color: blue;
    }
    .right {
      background-color: #f1f1f1;
      width: 50px;
      border: 0;
      border-radius: 10px;
      padding: 7px;
      color: red;
      &:hover {
        background-color: red;
        transition: 0.3s;
        color: white;
      }
    }
  }
`;
