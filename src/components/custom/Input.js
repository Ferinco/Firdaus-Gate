import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export default function Input({
  style,
  others,
  placeholder,
  onChange,
  name,
  type,
  size,
}) {
  return (
    <InputStyle
      {...others}
      placeholder={placeholder}
      style={{ ...style }}
      name={name}
      onChange={onChange}
      type={type}
      size={size}
    />
  );
}

Input.propTypes = {
  style: PropTypes.object,
  others: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};

const InputStyle = styled(Form.Control)`
  border-radius: 10px;

  background-color: #f1f1f1;
  outline: none !important;
  width: 100%;
  :focus {
    outline: none !important;
    border: none !important;
  }
`;
