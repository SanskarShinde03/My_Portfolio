import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1f4bc4 0%, #28d8ce 100%);
  padding: 18px 48px;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavLink = styled.li`
  font-size: 1rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  button {
    background: linear-gradient(90deg, #ffc658 10%, #e060a7 130%);
    color: #171c45;
    border: none;
    border-radius: 28px;
    cursor: pointer;
    padding: 8px 22px;
    font-size: 1.05em;
    font-weight: 700;
    font-family: inherit;
    transition: background 0.24s, color 0.22s, box-shadow 0.23s, transform 0.19s;
    box-shadow: 0 2px 8px rgba(40,216,206,0.18);

    &:hover {
      background: linear-gradient(110deg, #28d8ce 20%, #ffc658 100%);
      color: #fff;
      box-shadow: 0 4px 16px rgba(24,117,240,0.19);
      transform: translateY(-3px) scale(1.08);
    }
    &:active {
      background: linear-gradient(90deg, #e060a7 0%, #ffc658 70%);
      color: #fff;
      transform: scale(0.97);
    }
  }
`;

function Navbar({ onNavigate }) {
  return (
    <Nav>
      <h2 style={{ letterSpacing: '1px', cursor:"pointer" }} onClick={() => onNavigate("home")}>
        Sanskar Shinde
      </h2>
      <NavLinks>
        <NavLink><button onClick={() => onNavigate("home")}>Home</button></NavLink>
        <NavLink><button onClick={() => onNavigate("about")}>About</button></NavLink>
        <NavLink><button onClick={() => onNavigate("skills")}>Skills</button></NavLink>
        <NavLink><button onClick={() => onNavigate("projects")}>Projects</button></NavLink>
        <NavLink><button onClick={() => onNavigate("contact")}>Contact</button></NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
