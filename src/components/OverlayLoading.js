import React from "react";
import styled from "styled-components";
import { CircularProgress } from "./custom";

export const OverlayLoading = () => {
  return (
    <Wrapper>
      <div className="overlay_inner">
        <div className="overlay_content">
          <CircularProgress />
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
  .overlay_inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .overlay_content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
