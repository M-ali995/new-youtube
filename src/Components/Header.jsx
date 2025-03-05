import { useState, useEffect } from "react";
import DropdownButton from "./DropdownButton";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";

export default function Header({ searchingVideo, resetSearchFilter }) {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(ev) {
    setInputValue(ev.target.value);
  }

  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = ()  => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <header className="header">
      <NavLink to="/" end onClick={() => resetSearchFilter()}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/2560px-Youtube.png" />
      </NavLink>

      <div className="header-searchBox">
        <input
          type="text"
          placeholder="Введите запрос"
          onInput={inputHandler}
        />
        <button onClick={() => searchingVideo(inputValue)}>
          <i className="material-symbols-outlined">search</i>
        </button>
      </div>

      <div className="header-rightItems">
        <i className="material-symbols-outlined">mic</i>
        <button>+Создать</button>
        <i className="material-symbols-outlined">notifications</i>
        <div>{user ? <DropdownButton onLogout={handleLogout} /> : <Auth onLogin={(user) => setUser(user)} />}</div>
      </div>
    </header>
  );
}
