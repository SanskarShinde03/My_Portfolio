import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Section = styled.section`
  max-width: 750px;
  margin: 42px auto 64px auto;
  background: linear-gradient(120deg, #1875f0 0%, #ffc658 100%);
  color: #fff;
  border-radius: 24px;
  text-align: center;
  padding: 44px 30px;
  box-shadow: 0 8px 32px rgba(24,117,240,0.13);
`;

const Button = styled.a`
  display: inline-block;
  background: #e060a7;
  color: #fff;
  padding: 14px 34px;
  border-radius: 8px;
  font-size: 1.15em;
  margin-top: 28px;
  box-shadow: 0 4px 20px rgba(224,96,167,0.17);
  transition: background .28s, transform .23s;
  &:hover {
    background: #28d8ce;
    transform: translateY(-2px) scale(1.08);
  }
`;

function Contact() {
  return (
    <Fade>
      <Section id="contact">
        <h2 style={{
  marginBottom: "1em",
  fontSize: "2rem",
  color: "#fff",     // Always clear white
  textShadow: "1px 2px 8px rgba(32,36,55,0.16)" // soft shadow for pop
}}>
  Contact Me
</h2>
        <p>
          Feel free to reach out for collaboration or questions.<br />
          <strong>Email:</strong> <a style={{color:'#ffc658'}} href="mailto:shindesanskar0503@gmail.com">shindesanskar0503@gmail.com</a>
        </p>
        <Button href="mailto:shindesanskar0503@gmail.com">Email Me</Button>
      </Section>
    </Fade>
  );
}

export default Contact;
