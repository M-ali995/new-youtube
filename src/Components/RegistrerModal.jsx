import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RegistrerModal = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isOpen]);

  const checkUserExist = (userList) => {
    return userList.some((item) => item.login === login);
  };
  const handleSubmit = () => {
    if (login && password) {
      const userList = JSON.parse(localStorage.getItem("userList")) || [];
      const userData = { login: login, password: password };
      if (!checkUserExist(userList)) {
        userList.push(userData);
        localStorage.setItem("userList", JSON.stringify(userList));
      }
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>{isOpen && (
      <AuthModalOverlay onClick={handleOverlayClick}>
       
        <AuthModalBox>
        <HeaderModal><strong>Sign Up Menu</strong></HeaderModal>
          <AuthModalInput
            placeholder="Login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <AuthModalInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthModalBtn onClick={handleSubmit}>Sign In</AuthModalBtn>
          <AuthModalBtn onClick={() => setIsOpen(false)}>Close</AuthModalBtn>
        </AuthModalBox>
      </AuthModalOverlay>
    )}</>
  );
};

export default RegistrerModal;

const AuthModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const AuthModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AuthModalInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AuthModalBtn = styled.button`
  padding: 10px 15px;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #2980b9;
  }
`;

const HeaderModal = styled.span`
  font-size: 1.8rem;
`;
