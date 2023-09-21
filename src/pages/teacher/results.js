import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/custom/Header";
import { useApi } from "../../hooks/useApi";

export default function Results() {
  const { getReports, reports } = useApi();
  useEffect(() => {
    getReports();
  }, []);
  console.log(reports);
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
const Wrapper = styled.div``;
