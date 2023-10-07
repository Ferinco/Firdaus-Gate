import React from "react";
import styled from "styled-components";
import {
  LandingHero, AboutSection
} from "../components/landing";

export default function Home() {
  return (
    <Wrapper>
      <LandingHero />
      <AboutSection/>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
