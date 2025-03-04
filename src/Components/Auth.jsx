import React, { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { authentication } from "../authReducer";

const Auth = () => {
  const [user, setUser] = useState(null);
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleAuth = (userData) => {
    if (authentication(userData)) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuthModalVisible(false);
    } else {
      alert("Incorrect username or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <button onClick={setAuthModalVisible}>Sign In </button>
      {authModalVisible && <AuthModal onAuth={handleAuth} />}
    </div>
  );
};

export default Auth;
