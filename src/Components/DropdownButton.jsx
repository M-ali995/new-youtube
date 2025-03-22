import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DropdownButton = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <DropdownBox ref={dropdownRef}>
      <DropdownToggleBtn onClick={toggleDropdown} className="dropdown-toggle">
        <ProfileIconBox> A </ProfileIconBox>
      </DropdownToggleBtn>
      {isOpen && (
        <DropDownMenu>
          <DropDownMenuUl>
            <DropDownMenuLi>Мой канал</DropDownMenuLi>
            <DropDownMenuLi>Настройки</DropDownMenuLi>
            <DropDownMenuLi onClick={onLogout}>Выход</DropDownMenuLi>
          </DropDownMenuUl>
        </DropDownMenu>
      )}
    </DropdownBox>
  );
};

export default DropdownButton;

const DropdownBox = styled.div`
  position: relative;
  display: inline-block;
`;
const DropdownToggleBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #1db502;
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #b5b5b5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 100;
`;

const DropDownMenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const DropDownMenuLi = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:hover {
    background-color: #f1f1f1;
  }
`;
