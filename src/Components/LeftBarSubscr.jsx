import { channels } from "../yotubeReducer";
import React, { useState, useEffect } from "react";

export default function LeftBarSubscr({ setChannel }) {
  const clickHandler = (name) => {
    console.log(name);
    setChannel(name);
  };

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const channelName = JSON.parse(localStorage.getItem("subscribes")) || [];

    const filteredData = channels.filter((item) =>
      channelName.includes(item.name)
    );

    console.log(filteredData);
    setFilteredItems(filteredData);
  }, []);

  return (
    <div className="left-barSubcr">
      <div className="zag">Подписки</div>
      {filteredItems.map((item) => (
        <span key={item.id} onClick={() => clickHandler(item.name)}>
          <img src={item.url} alt={item.name} />
          {item.name}
        </span>
      ))}
      <div></div>
    </div>
  );
}
