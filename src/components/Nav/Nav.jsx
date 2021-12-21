import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import navData from "../../Data/navData";
import "./Nav.css";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  position: fixed;
`;

const NavLink = css`
  text-decoration: none;
  cursor: pointer;
  color: white;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const MenuBar = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 2rem;
    margin-top: 0.5rem;
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  ${NavLink}
  margin-right: 3rem;
  font-family: "Montserrat", sans-serif;
  transition: 0.6s;
  &:hover {
    color: #333;
  }
`;

const Nav = ({ toggleDropdown }) => {
  const [navDown, setNavDown] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 65) {
      setNavDown(true);
    } else {
      setNavDown(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <Navbar className={navDown && "navBg"}>
      <Logo to="/">State Properties</Logo>
      <MenuBar onClick={toggleDropdown}>
        <HiMenuAlt3 />
      </MenuBar>
      <NavMenu>
        {navData.map((item, idx) => (
          <NavLinks key={idx} to={item.path}>
            {item.title}
          </NavLinks>
        ))}
        <button className="contact-btn">contact us</button>
      </NavMenu>
    </Navbar>
  );
};

export default Nav;
