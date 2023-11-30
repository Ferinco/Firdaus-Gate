import React from "react";
import styled from "styled-components";
import {
  LandingHero, AboutSection, OfferSection, Services, Gallery, Info, Intro, ContactUS, AdmissionSection, Testimonials
} from "../components/landing";
import { Helmet } from "react-helmet";
import ContactUs from "../components/landing/contactSection";

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
      <Services/>
      <Info/>
      <AdmissionSection/>
      <Testimonials/>
      <ContactUs/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width:100vw !important;
overflow-x:hidden !important;
    p {
  font-size: 16px !important;
}
@media (max-width: 768px) {
  p {
    font-size: 15px !important;
  }
}
    `;
