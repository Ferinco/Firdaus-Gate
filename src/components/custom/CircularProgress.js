import styled from "styled-components";

export const CircularProgress = () => <Wrapper />;

const Wrapper = styled.div`
  width: 75px;
  height: 75px;
  display: inline-block;
  border-width: 5px;
  border-color: rgba(0, 0, 0, 0.1);
  border-top-color: #000;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
