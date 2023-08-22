import React from "react";
import styled from "styled-components";
import { Header } from "../../../components/custom/Header";
export default function Results() {
  return (
    <div>
      <Wrapper>
        <div className="container d-flex flex-column p-5">
          <Header left>
            <h3>Results</h3>
          </Header>
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
`