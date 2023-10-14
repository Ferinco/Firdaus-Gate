import React from "react";
import styled from "styled-components";

export const OverlayLoading = () => {
  return (
    <Wrapper>
      <div className="overlay_content">
        <div className="circular-progress">
        <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index:9999;
  .overlay_content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .circular-progress {
.spinner-border{
  color: black;
  height: 70px !important;
  width: 70px !important;
  font-weight: 700 !important;
}
  }
`;
