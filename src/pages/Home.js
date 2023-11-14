import React from "react";
import styled from "styled-components";
import {
  LandingHero, AboutSection, OfferSection, Services, Gallery, Info, Intro
} from "../components/landing";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <Wrapper>
             <Helmet>
        <title>Firdaus Gate Model Schools.</title>
        <meta name="description" content="Welcome to Firdaus-Gate Model Schools where knowledge meets faith." />
        <meta name="keywords" content="landing page, firdaus gate model schools, welcome" />
      </Helmet>
      <LandingHero />
      <AboutSection/>
      <Intro/>
      <OfferSection/>
      <Services/>
      <Info/>
      <Gallery/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width:100vw !important;
overflow-x:hidden !important;
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
    );
    p {
  font-size: 19px !important;
}
@media (max-width: 768px) {
  p {
    font-size: 15px !important;
  }
}
    `;
