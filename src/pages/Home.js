import React from "react";
import styled from "styled-components";
import {
  LandingHero,
  AboutSection,
  OfferSection,
  Services,
  Gallery,
  Info,
  Intro,
  ContactUS,
  AdmissionSection,
  Testimonials,
  Special,
} from "../components/landing";
import { Helmet } from "react-helmet";
import ContactUs from "../components/landing/contactSection";
import News from "../components/landing/newsSection";
import WatchVideo from "../components/landing/videoSection/video";

export default function Home() {
  return (
    <Wrapper className=" ">
      <LandingHero />
      <AboutSection />
      <Intro />
      <OfferSection />
      <Gallery />
      <Special />
      {/* <Services/> */}
      <Info />
      <WatchVideo />
      <Testimonials />
      <AdmissionSection />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100vw;
  overflow-x: hidden !important;
  height: fit-content !important;
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
  h2 {
    @media screen and (min-width: 599px) and (max-width: 899px) {
      font-size: 40px !important;
    }
    @media screen and (max-width: 599px) {
      font-size: 32px !important;
    }
  }
`;
