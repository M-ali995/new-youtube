import React, { useState, useEffect } from "react";
import ContainerItem from "./ContainerItem";
import { yotubeBox } from "../yotubeReducer";

const History = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("history")) || [];
 
    const filteredData = yotubeBox.filter((item) => storedIds.includes(parseInt(item.id)));
    console.log(filteredData)
    setFilteredItems(filteredData);
  }, []);

  return (
    <div className="main-page">
      <div className="containers">
        {filteredItems.map((item) => (
          <ContainerItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default History;
