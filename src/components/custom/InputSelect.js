import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormSelect } from "react-bootstrap";

export default function InputSelect({
  children,
  style,
  onChange,
  others,
  placeholder,
  name,
  type,
  size,
}) {
  return (
    <InputStyle
      {...others}
      placeholder={placeholder}
      onChange={onChange}
      style={{ ...style }}
      name={name}
      type={type}
      size={size}
    >
      {children}
    </InputStyle>
  );
}

InputSelect.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  others: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};

const InputStyle = styled(FormSelect)`
  border-radius: 10px;

  background-color: #f1f1f1;
  outline: none !important;
  width: 100%;
  :focus {
    outline: none !important;
    border: none !important;
  }
`;
