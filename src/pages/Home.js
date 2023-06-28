import React from "react";
import styled from "styled-components";
import "../style.css";
import {
  LandingHero,
  Welcome,
  Gallery,
  Services,
  Admission,
  Offer,
  News,
  Testimonials,
} from "../components/landing";

export default function Home() {
  return (
    <Wrapper>
      <LandingHero />
      <Welcome />
      <Gallery />
      <Services />
      <Admission />
      <Offer />
      <News />
      <Testimonials />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
