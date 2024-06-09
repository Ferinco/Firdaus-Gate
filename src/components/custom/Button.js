import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    (props.blue && "#020d9b") || (props.white && "white")};
  color: ${(props) => (props.blue && "white") || (props.white && "black")};
  font-weight: 400 !important;
  border: ${(props) =>
    (props.blue && "1px solid #020d9b") || (props.white && "1px solid black")};
  padding: 7px 25px;
  font-size: 15px;
  border-radius: 9px;
  &:hover {
    transition: 0.4s;
    background-color: ${(props) =>
      (props.blue && "#04048d") || (props.white && "#020d9b")};
    color: ${(props) => (props.blue && "white") || (props.white && "white")};
    transition: 0.5s;
    border: ${(props) =>
      (props.blue && "1px solid #04048d") || (props.white && "1px solid #020d9b")};
  }
  &:disabled {
    opacity: 0.4;
  }
`;
export const ControlButton = styled.button`
  border: 0;
  padding: 7px 10px;
  background: transparent;
  .icon {
    color: black;
  }
  &:hover {
    // background-color: #f1f1f1;
    transition: 0.3s;
    .icon {
      color: blue;
    }
  }
`;
