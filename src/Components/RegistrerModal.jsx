import React, { useState } from "react";

const RegistrerModal = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkUserExist = (userList) => {
    return userList.some((item) => item.login === login);
  };
  const handleSubmit = () => {
    if (login && password) {
      const userList = JSON.parse(localStorage.getItem("userList")) || [];
      const userData = { login: login, password: password };
      if (!checkUserExist(userList)) {
        userList.push(userData)
        localStorage.setItem("userList", JSON.stringify(userList));
      }
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
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default RegistrerModal;
