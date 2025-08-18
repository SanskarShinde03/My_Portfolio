import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import profilePic from '../assets/profile.jpg';


const Section = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 48px;
  background: linear-gradient(135deg, #28d8ce 0%, #f96563 100%);
  color: #fff;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(75, 156, 255, 0.18);
  margin-left: 48px;
  background: #fff;
`;

function Home() {
  return (
    <Fade cascade>
      <Section id="home">
        <Info>
          <h1 style={{
            fontSize: "2.7rem",
            marginBottom: "0.5em",
            background: "linear-gradient(90deg, #ffc658 10%, #fff 110%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Hi, I'm Sanskar
          </h1>
          <h2 style={{ fontWeight: "normal", marginBottom: "1em" }}>
            Front-End Developer | Web Developer
          </h2>
          <p style={{fontSize:'1.15em', lineHeight:'1.6'}}>
            I love to create beautiful and performant web experiences.<br />
            Let’s build something amazing together!
          </p>
        </Info>
        <Img src={profilePic}></Img>
      </Section>
    </Fade>
  );
}

export default Home;
