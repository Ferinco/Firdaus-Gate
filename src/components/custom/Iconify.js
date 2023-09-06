import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import PropTypes from "prop-types";

Iconify.propType = {
  name: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.any,
};
export default function Iconify({ name, fontSize, style }) {
  return (
    <IconWrapper style={style}>
      <Icon
        name={name}
        style={{
          fontSize: fontSize || "32px",
        }}
      />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  border-radius: 20px;
  background-color: blue;
  padding: 10px;
`;
