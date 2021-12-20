import React from "react";
import styled from "styled-components";
import navData from "../Data/navData";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: ${({ dropdown }) => (dropdown ? "0" : "-100%")};
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ dropdown }) => (dropdown ? "1" : "0")};
`;

const Button = styled.button`

  background: hsl(210, 100%, 5%);
  white-space: nowrap;
  border: none;
  outline: none;
  min-width: 150px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  color: #fff;
  font-size: 16px;
}

&:hover {
  transform: translateY(-2px);
}
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;
const DropdownLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  transition: 0.3s;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = ({ dropdown, toggleDropdown }) => {
  return (
    <DropdownContainer dropdown={dropdown} onClick={toggleDropdown}>
      <Icon onClick={toggleDropdown}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {navData.map((item, index) => (
            <DropdownLink to={item.path} key={index} onClick={toggleDropdown}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button>Contact Us</Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
