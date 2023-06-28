import React from "react";
import styled from "styled-components";
import '../style.css'
import { LandingHero } from "../components/landing";
import Welcome from "../layout/Welcome"
import News from "../layout/News";
import Gallery from "../layout/Gallery";
import Services from "../layout/Services";
import Admission from "../layout/Admission";
import Offer from "../layout/Offer";
import Bottom from "../layout/Bottom";

export default function Home() {
  return (
    <Wrapper>
      <LandingHero />
      <Welcome/>
      <Gallery/>
      <Services/>
      <Admission/>
      <Offer/>
      <News/>
      <Bottom/>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
