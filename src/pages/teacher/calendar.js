import React from "react";
import styled from "styled-components";
export default function Calendar() {
  return (
    <Wrapper className="px-5">
      <div className="py-3">
        <h4>Term Calendar</h4>
        <p>view the calendar bnof the current term.</p>
      </div>
      <div>
        <div className="p-5 calendar-div">
          <p>calendar not created yet... check back later</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .calendar-div {
    min-height: 400px;
    background-color: white;
    border-radius: 20px;
  }
`;
