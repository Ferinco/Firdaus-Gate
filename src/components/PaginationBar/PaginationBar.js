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
      <div className="d-flex justify-between w-100 align-items-center">
        <div className="mt-2 d-flex">
          <span>
            Page{" "}
            <strong>
              {+currentPage} of {pageCount}
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
        <div>
          <button onClick={previousPage} disabled={!canPreviousPage}>
            <Icon icon="ooui:next-rtl" className="icon" />
          </button>

          <button onClick={nextPage} disabled={!canNextPage}>
            <Icon icon="ooui:next-ltr" className="icon" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default PaginationBar;
const Container = styled.div`

`
