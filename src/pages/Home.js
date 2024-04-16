import React from "react";
import styled from "styled-components";
import {
  LandingHero, AboutSection, OfferSection, Services, Gallery, Info, Intro, ContactUS, AdmissionSection, Testimonials, Special
} from "../components/landing";
import { Helmet } from "react-helmet";
import ContactUs from "../components/landing/contactSection";
import News from "../components/landing/newsSection";

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
      <Gallery/>
      <Special/>
      {/* <Services/> */}
      <Info/>
      {/* <News/> */}
      <Testimonials/>
      <AdmissionSection/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width:100vw !important;
overflow-x:hidden !important;
position: relative;
    p {
  font-size: 16px !important;
  font-weight: 400 !important;
  /* color: black !important; */
}
@media (max-width: 768px) {
  p {
    font-size: 16px !important;
  }
}
h2{
  @media screen and (min-width: 599px) and (max-width: 899px) {
    font-size: 40px !important;
  }
  @media screen and (max-width: 599px) {
    font-size: 36px !important;
  }
}
    `;
