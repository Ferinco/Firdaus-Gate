import React from "react";
import { ControlButton } from "../custom/Button";
import { Icon } from "@iconify/react";
import styled from "styled-components";
const PaginationBar = ({
  currentPage,
  pageCount,
  pageSize,
  canPreviousPage,
  canNextPage,
  updatePageSize,
  previousPage,
  nextPage,
}) => {
  return (
    <Container>
      <div className="d-flex flex-row justify-content-between w-100 align-items-baseline">
        <div className="mt-2 d-flex align-items-baseline gap-2">
          <span className="d-flex flex-row gap-1">
            Page{" "}
            <strong>
              {+currentPage} 
            </strong>{" "}
              of 
              <strong>{" "}
              {pageCount} 
            </strong>{" "}
          </span>
          <select
            className="mt-2 form-select"
            value={pageSize}
            onChange={(e) => {
              updatePageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div className="controls">
          <button onClick={previousPage} disabled={!canPreviousPage} className="control">
            <Icon icon="ooui:next-rtl" className="icon" />
          </button>

          <button onClick={nextPage} disabled={!canNextPage} className="control">
            <Icon icon="ooui:next-ltr" className="icon" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default PaginationBar;
const Container = styled.div`
.form-select, .control{
  cursor: pointer;
  .icon{
    color: grey;
  }
}
  span{
    font-size: 14px !important;
}
select{
  padding: 5px 25px;
  width: fit-content;
  font-size: 14px !important;
}
option{
  font-size: 14px !important;
}
.controls{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
`
