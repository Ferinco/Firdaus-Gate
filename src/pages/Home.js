import React from "react";
import styled from "styled-components";
import {
  LandingHero, AboutSection, OfferSection, Services
} from "../components/landing";

export default function Home() {
  return (
    <Wrapper>
      <LandingHero />
      <AboutSection/>
      <OfferSection/>
      <Services/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
background: linear-gradient(1turn, hsla(0, 0%, 100%, 0.01), #fff 85%),
    radial-gradient(
      ellipse at top left,
      rgba(13, 110, 253, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at top right,
      rgba(255, 228, 132, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center right,
      rgba(113, 44, 249, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center left,
      rgba(254, 51, 132, 0.5),
      transparent 50%
    );`;
