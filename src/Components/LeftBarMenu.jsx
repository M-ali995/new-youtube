import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function LeftBarMenu({ resetSearchFilter }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavClick = (path) => {
    setActiveLink(path);
    if (path === "/") resetSearchFilter();
  };

  const navItems = [
    { path: "/", label: "Главная", icon: "home" },
    // { path: "/shorts", label: "Shorts", icon: "playing_cards" },
    // { path: "/subscr", label: "Подписки", icon: "subscriptions" },
    { path: "/history", label: "История", icon: "history" },
    // { path: "/playlists", label: "Плейлисты", icon: "playlist_play" },
    // { path: "/videos", label: "Ваши Видео", icon: "smart_display" },
    { path: "/later", label: "Смотреть позже", icon: "schedule" },
    { path: "/liked", label: "Понравившиеся", icon: "thumb_up" },
  ];

  return (
    <LeftBarMenuBox>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => handleNavClick(item.path)}
          className={`nav-link ${
            activeLink === item.path ? "active-link" : ""
          }`}
        >
          <i className="material-symbols-outlined">{item.icon}</i>
          {item.label}
        </NavLink>
      ))}
      <hr />
    </LeftBarMenuBox>
  );
}

const LeftBarMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: center;
  gap: 5px;

  i {
    color: #888;
  }

  .active-link {
    background-color: #cfcfcf;

    i {
      color: #000;
      transform: scale(1.05);
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
    padding: 10px 0px 10px 5px;
    width: 100%;
    transition: 0.1s ease-in-out;

    &:hover {
      background-color: #cfcfcf;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    &:hover i {
      color: #000;
      transform: scale(1.05);
    }
  }
`;
