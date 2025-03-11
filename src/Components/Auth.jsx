import React, { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { authentication } from "../authReducer";
import RegistrerModal from "./RegistrerModal";
import styled from "styled-components";

const Auth = ({ onLogin }) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const handleAuth = (userData) => {
    if (authentication(userData)) {
      onLogin(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuthModalVisible(false);
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleRegister = (userData) => {
    console.log(userData);
  };

  const signInClickHandler = () => {
    setRegisterModalVisible(false);
    setAuthModalVisible(!authModalVisible);
  };

  const signUpClickHandler = () => {
    setAuthModalVisible(false);
    setRegisterModalVisible(!registerModalVisible);
  };

  return (
    <SignBox>
      <SignInBtn onClick={signInClickHandler}>Sign In </SignInBtn>
      {authModalVisible && <AuthModal onAuth={handleAuth} />}
      <SignUpBtn onClick={signUpClickHandler}>Sign Up </SignUpBtn>
      {registerModalVisible && <RegistrerModal onAuth={handleRegister} />}
    </SignBox>
  );
};

export default Auth;

const SignBox = styled.div`
  display: flex;
  gap: 10px;
`;

const SignInBtn = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SignUpBtn = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
