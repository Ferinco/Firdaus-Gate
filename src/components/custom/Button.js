import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({ children, variant, others }) {
  const variants = ["transparent", "primary", "secondary"];
  return (
    <Btn {...others} variant={variant}>
      {children}
    </Btn>
  );
}
const Btn = styled.button`
  background-color: ${({ variant }) =>
    (variant === "transparent" && "transparent") ||
    (variant === "primary" && "blue") ||
    (variant === "secondary" && "yellow") ||
    "blue"};
  color: ${({ variant }) =>
    (variant === "transparent" && "black") ||
    (variant === "primary" && "#fff") ||
    (variant === "secondary" && "#fff") ||
    "#fff"};
  outline: none;
  border: none;
  padding: 12px 18px;
  border-radius: 18px;
`;

Button.propTypes = {
  children: PropTypes.node,
  others: PropTypes.any,
  variant: PropTypes.oneOf(["transparent", "primary", "secondary"]),
};
