import React, { useState, useEffect, useRef } from "react";

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
    <div className="dropdown-button" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <div className="profile-icon"> A </div>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Мой канал</li>
            <li>Настройки</li>
            <li onClick={onLogout}>Выход</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
