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
    <HeaderBox>
      <NavLink to="/" end onClick={() => resetSearchFilter()}>
        <YoutubeImgIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/2560px-Youtube.png" />
      </NavLink>

      <HeaderSearchBox>
        <SearchInput
          type="text"
          placeholder="Введите запрос"
          onInput={inputHandler}
          value={inputValue}
        />

        <SearchBtn onClick={() => searchingVideo(inputValue)}>
          <i className="material-symbols-outlined">search</i>
        </SearchBtn>
      </HeaderSearchBox>

      <HeaderRightBox>
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
      </HeaderRightBox>
    </HeaderBox>
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

const HeaderBox = styled.header`
  position: sticky;
  background-color: #fff;
  z-index: 9;
  top: 0;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const YoutubeImgIcon = styled.img`
  padding: 10px 0px 0px 30px;
  width: 150px;
  height: 40px;
  cursor: pointer;
`;

const HeaderSearchBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  margin-left: 100px;
`;

const SearchInput = styled.input`
  width: 400px;
  flex-grow: 1;
  border: none;
  padding: 0px 16px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;
const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }

  .material-symbols-outlined {
    font-size: 20px;
    color: #333;
  }
`;

const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  padding-right: 50px;

  i {
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 3px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
