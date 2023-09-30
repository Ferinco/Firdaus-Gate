import React from "react";
import styled from "styled-components";

export const OverlayLoading = () => {
  return (
    <Wrapper>
        <div className="overlay_content">
        <div className="circular-progress">
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  z-index: 999 !important;
  .overlay_content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .circular-progress{
  width: 70px;
  height: 70px;
  display: inline-block;
  border-width: 5px;
  border-color: black;
  border-top-color: #000;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
`;
