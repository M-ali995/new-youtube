import { channels } from "../yotubeReducer";
import React, { useEffect, useState } from "react";

export default function LeftBarSubscr({ setChannel, subscribes }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filteredData = channels.filter((item) => subscribes.includes(item.name));
    setFilteredItems(filteredData);
  }, [subscribes]);

  const clickHandler = (name) => {
    console.log(name);
    setChannel(name);
  };

  return (
    <div className="left-barSubcr">
      <div className="zag">Подписки</div>
      {filteredItems.map((item) => (
        <span key={item.id} onClick={() => clickHandler(item.name)}>
          <img src={item.url} alt={item.name} />
          {item.name}
        </span>
      ))}
    </div>
  );
}
