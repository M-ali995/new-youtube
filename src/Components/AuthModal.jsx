import React, { useState } from "react";

const AuthModal = ({ onAuth }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (login && password) {
      const userData = { login: login, password: password }; // Пример данных
      onAuth(userData); // Передаем данные в Auth
    }
  };

  return (
    <div>
      <input 
        placeholder="Login" 
        name="login" 
        value={login} 
        onChange={(e) => setLogin(e.target.value)}
      />
      <input 
        placeholder="Password" 
        name="password" 
        type="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
};

export default AuthModal;
