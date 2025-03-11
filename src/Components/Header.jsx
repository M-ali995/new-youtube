import { useState, useEffect } from "react";
import DropdownButton from "./DropdownButton";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";
import VoiceTyping from "./VoiceTyping";
import styled from "styled-components";

export default function Header({ searchingVideo, resetSearchFilter }) {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(ev) {
    setInputValue(ev.target.value);
  }

  function voiceTypingHandler(ev) {
    console.log(ev);
    setInputValue(ev);
  }
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

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
          value={inputValue}
        />

        <button onClick={() => searchingVideo(inputValue)}>
          <i className="material-symbols-outlined">search</i>
        </button>
      </div>

      <div className="header-rightItems">
        <VoiceTyping
          onInput={voiceTypingHandler}
          type="text"
          placeholder="Введите запрос"
        />

        <CreateBtn>+Создать</CreateBtn>
        <i className="material-symbols-outlined">notifications</i>
        <div>
          {user ? (
            <DropdownButton onLogout={handleLogout} />
          ) : (
            <Auth onLogin={(user) => setUser(user)} />
          )}
        </div>
      </div>
    </header>
  );
}

const CreateBtn = styled.button`
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


