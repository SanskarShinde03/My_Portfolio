import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaPython, FaJava, FaGithub, FaNodeJs} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { MdPhonelink, MdForum } from "react-icons/md";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 color="#e44d26" />, color: "#fff2ec" },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" />, color: "#eef6fb" },
  { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" />, color: "#fffbe1" },
  { name: "React", icon: <FaReact color="#61dafb" />, color: "#e7fbfc" },
  { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" />, color: "#f4e5ff" },
  { name: "Node.js", icon: <FaNodeJs color="#339933" />, color: "#e6f4ea" },
  { name: "Git", icon: <FaGitAlt color="#f1502f" />, color: "#fff0ed" },
  { name: "GitHub", icon: <FaGithub color="#24292e" />, color: "#e8eaf0" },
  { name: "Python", icon: <FaPython color="#3776AB" />, color: "#edf6ff" },
  { name: "MySQL", icon: <SiMysql color="#00758F" />, color: "#e1f7ff" },
  { name: "Java", icon: <FaJava color="#ea2d2e" />, color: "#ffe5e5" },
  { name: "Responsive Design", icon: <MdPhonelink color="#4b9cff" />, color: "#e9f7ff" },
  { name: "Communication", icon: <MdForum color="#feae00" />, color: "#fff9e1" },
];

const Section = styled.section`
  max-width: 1000px;
  margin: 42px auto;
  background: linear-gradient(120deg, #2be2bb 0%, #a02ae0 100%);
  border-radius: 28px;
  color: #fff;
  box-shadow: 0px 10px 36px rgba(160,42,224,0.13);
  text-align: center;
  padding: 50px 34px;

  @media (max-width: 900px) {
    max-width: 95vw;
    padding: 30px 10px;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  @media (max-width: 700px) {
    gap: 18px;
  }
  @media (max-width: 500px) {
    gap: 8px;
    flex-direction: column;
    align-items: center;
  }
`;

const SkillCard = styled.div`
  background: ${props => props.color};
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(100, 100, 100, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  width: 110px;
  transition: box-shadow 0.2s, transform 0.2s;
  color: #252525;
  margin: 0;

  &:hover {
    box-shadow: 0 8px 32px rgba(75,156,255,0.26);
    transform: scale(1.08);
    background: linear-gradient(120deg, #ffc658 0%, #28d8ce 100%);
    color: #fff;
  }

  @media (max-width: 700px) {
    width: 90px;
    padding: 15px 4px;
  }
  @media (max-width: 500px) {
    width: 80vw;
    min-width: 160px;
    padding: 14px 2px;
  }
`;

const SkillName = styled.div`
  margin-top: 12px;
  font-weight: 700;
  font-size: 0.97em;
  letter-spacing: 0.5px;
  text-align: center;
`;

function Skills() {
  return (
    <Fade direction="up" cascade>
      <Section id="skills">
        <h2 style={{
          marginBottom: "28px",
          fontSize: "2.05rem",
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(90deg, #4b9cff 20%, #e44d26 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          My Skills
        </h2>
        <SkillsGrid>
          {skillsData.map(skill => (
            <SkillCard key={skill.name} color={skill.color}>
              <span style={{ fontSize: "2.1rem", marginBottom: "8px" }}>
                {skill.icon}
              </span>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>
    </Fade>
  );
}

export default Skills;
