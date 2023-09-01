import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export default function ProgressPage() {
  return (
    <Wrapper>
      <div className="logo">
        <img src="/images/logo.png" />
      </div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Site is in Progress")
            .pauseFor(1000)
            .deleteAll()
            .typeString("kindy check back later...")
            .start();
        }}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding: 0;
  width: 100vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-weight: 800;
  font-size: 30px;
  gap:50px;
  color:blue;
  .logo {
    height: 100px;
    width: 100px;

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;
