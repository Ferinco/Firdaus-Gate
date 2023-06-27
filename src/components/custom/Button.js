import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({ children, variant, others }) {
  return <Btn {...others}>{children} </Btn>;
}
const Btn = styled.button`
  background-color: blue;
  color: #fff;
  outline: none;
  border: none;
  padding: 12px 18px;
`;

Button.propTypes = {
  children: PropTypes.node,
  others: PropTypes.any,
  variant: PropTypes.string,
};
