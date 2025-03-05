import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftBarMenu({ resetSearchFilter }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavClick = (path) => {
    setActiveLink(path);
    if (path === "/") resetSearchFilter();
  };

  const navItems = [
    { path: "/", label: "Главная", icon: "home" },
    { path: "/shorts", label: "Shorts", icon: "playing_cards" },
    { path: "/subscr", label: "Подписки", icon: "subscriptions" },
    { path: "/history", label: "История", icon: "history" },
    { path: "/playlists", label: "Плейлисты", icon: "playlist_play" },
    { path: "/videos", label: "Ваши Видео", icon: "smart_display" },
    { path: "/later", label: "Смотреть позже", icon: "schedule" },
    { path: "/liked", label: "Понравившиеся", icon: "thumb_up" },
  ];

  return (
    <div className="left-barMenu">
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
    </div>
  );
}




