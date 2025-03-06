import React, { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { authentication } from "../authReducer";
import RegistrerModal from "./RegistrerModal";

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
    <div>
      <button onClick={signInClickHandler}>Sign In </button>
      {authModalVisible && <AuthModal onAuth={handleAuth} />}
      <button onClick={signUpClickHandler}>Sign Up </button>
      {registerModalVisible && <RegistrerModal onAuth={handleRegister} />}
    </div>
  );
};

export default Auth;
