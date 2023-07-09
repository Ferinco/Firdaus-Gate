import React from "react";
import styled from "styled-components";

export default function Input({ style, others, placeholder }) {
  return (
    <InputStyle {...others} placeholder={placeholder} style={{ ...style }} />
  );
}

const InputStyle = styled.input`
  border-radius: 10px;
  padding: 14px 16px;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  width: 100%;
`;
