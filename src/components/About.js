import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

const AboutBox = styled.section`
  background: linear-gradient(120deg, #1875f0 70%, #e060a7 100%);
  color: #fff;
  border-radius: 24px;
  padding: 44px 36px;
  margin: 36px auto;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(24,117,240,0.15);
`;

function About() {
  return (
    <Zoom>
      <AboutBox id="about">
        <h2 style={{
          marginBottom: '1em',
          textAlign: 'center',
          background: "linear-gradient(90deg, #ffc658 10%, #fff 110%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          About Me
        </h2>
        <p style={{fontSize:'1.14em', marginBottom:'1.2em'}}>
          Hi, I'm <strong>Sanskar Shinde</strong>.<br />
          As a Front-End Developer and Web Developer, I craft engaging user interfaces and focus on clean, elegant code.
          I’m passionate about bringing ideas to life in the browser and always advancing my skills.
        </p>
        <ul style={{marginTop: '1em', fontSize:'1.1em', lineHeight:'2'}}>
          <li><strong>Phone:</strong> +91 9021757296</li>
          <li><strong>Email:</strong> <a href="mailto:shindesanskar0503@gmail.com" style={{color:'#ffc658'}}>shindesanskar0503@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sanskar-shinde-a7b360368" target="_blank" rel="noopener noreferrer" style={{color:'#ffc658'}}>linkedin.com/in/sanskar-shinde-a7b360368</a></li>
          <li><strong>GitHub:</strong> Not available</li>
        </ul>
      </AboutBox>
    </Zoom>
  );
}

export default About;
