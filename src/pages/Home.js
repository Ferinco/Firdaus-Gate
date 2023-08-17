import React from "react";
import styled from "styled-components";
import {
  LandingHero
} from "../components/landing";

export default function Home() {
  return (
    <Wrapper>
      <LandingHero />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
