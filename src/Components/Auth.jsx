import React, { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { authentication } from "../authReducer";

const Auth = ({onLogin}) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleAuth = (userData) => {
    if (authentication(userData)) {
      onLogin(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuthModalVisible(false);
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div>
      <button onClick={setAuthModalVisible}>Sign In </button>
      {authModalVisible && <AuthModal onAuth={handleAuth} />}
    </div>
  );
};

export default Auth;
