import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NewsPage() {
  return (
    <Wrapper className="d-flex flex-column px-4 py-5">
      <div className="d-flex flex-row justify-content-between flex-wrap">
        <h6>News Configuration Page</h6>
        <button className="post-btn">
          <Link to="/admin/post-news" className="react-router-link">Post News</Link>
        </button>
      </div>
      <div className="table-div mt-5 py-5">
        <div className="container">
          <div className="table-header d-flex flex-row justify-content-between flex-wrap">
            <div className="">
              <p>History ofnews posted by the Admin</p>
            </div>
            <button className="clear-btn">clear all</button>
          </div>
        <div className="table-div">
        <Table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>No.</th>
                <th>Date Posted</th>
                <th>Title</th>
                <th>Content</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>01/01/2024</td>
                <td>03/01/2023</td>
                <td>Algebra</td>
                <td>
                  <button className="edit-btn">edit</button>
                </td>
                <td>
                  <button className="delete-btn">delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  tr {
    .edit-btn {
      font-size: 14px;
      padding: 1px 5px;
      border: 1px solid blue;
      background-color: blue;
      color: white;
      object-position: center;
    }
    .delete-btn {
      font-size: 14px;
      padding: 1px 5px;
      border: 1px solid red;
      background-color: red;
      color: white;
    }
  }
  .post-btn {
    color: white;
    background-color: blue;
    border: 1px solid blue;
    padding: 3px 10px;
  }
  .clear-btn {
    color: white;
    background-color: red;
    border: 1px solid red;
    padding: 3px 10px;
  }
  Table{
    width: 1050px !important;
  }
  .table-div{
    overflow-x: auto;
  }
`;
