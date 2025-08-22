import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import project1 from "../assets/project1.png";
import projectNumberPlate from "../assets/projectNumberPlate.png"; // Replace with your actual image path

const projects = [
  {
    name: "Car Rental",
    desc: "An intuitive car rental platform enabling users to easily browse, book, and manage vehicle rentals online. Designed and implemented for simulated 200+ users, with optimized transaction workflows resulting in a 25% faster booking process.",
    img: project1,
  },
  {
    name: "Smart Number Plate Detection System",
    desc: `Designed and developed an intelligent vehicle entry management solution leveraging computer vision and machine learning techniques. This system 
    accurately detects and reads number plates in real-time from live video feeds, automating gate access control for parking lots, toll booths, and 
    secured facilities. Features include instant alerts for unauthorized vehicles, seamless database integration for logging entries, and a user-friendly 
    interface for administrators. The project significantly improves security, reduces manual workloads, and enhances operational efficiency.`,
    img: projectNumberPlate,
  },
];

const Section = styled.section`
  max-width: 1000px;
  margin: 42px auto;
  background: linear-gradient(120deg, #ffb993 0%, #1875f0 100%);
  border-radius: 24px;
  color: #fff;
  box-shadow: 0 10px 32px rgba(187,145,106,0.16);
  padding: 50px 40px;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.13);
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 4px 16px rgba(24,117,240,0.09);
  padding: 26px 20px;
  transition: background 0.25s, transform 0.23s;
  color: #fff;
  &:hover {
    background: rgba(40,216,206,0.21);
    transform: translateY(-5px) scale(1.05);
  }
  @media (max-width: 700px) {
    flex-direction: column;
    img { margin-bottom: 1em; }
  }
`;

const Img = styled.img`
  width: 160px;
  border-radius: 12px;
  margin-right: 34px;
`;

function Projects() {
  return (
    <Fade direction="up" cascade>
      <Section id="projects">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.2em",
            fontSize: "2.15rem",
            background: "linear-gradient(90deg, #ffc658 0%, #28d8ce 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects
        </h2>
        {projects.map((p, i) => (
          <Card key={i}>
            <Img src={p.img} alt={p.name} />
            <div>
              <h3 style={{ marginBottom: "0.5em" }}>{p.name}</h3>
              <p style={{ fontSize: "1em" }}>{p.desc}</p>
            </div>
          </Card>
        ))}
      </Section>
    </Fade>
  );
}

export default Projects;
