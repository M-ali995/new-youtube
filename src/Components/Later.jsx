import React, { useState, useEffect } from "react";
import ContainerItem from "./ContainerItem";
import { yotubeBox } from "../yotubeReducer";
import styled from "styled-components";

const Later = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("watchLater")) || [];
    const storedIdsAsNumbers = storedIds.map(Number);
    const filteredData = yotubeBox.filter((item) =>
      storedIdsAsNumbers.includes(item.id)
    );

    console.log(filteredData);
    setFilteredItems(filteredData);
  }, []);

  
  const removeFromWatchLater = (id) => {
    const updatedIds = JSON.parse(localStorage.getItem("watchLater") || "[]").filter(
      (storedId) => storedId !== id
    );

    localStorage.setItem("watchLater", JSON.stringify(updatedIds));
    setFilteredItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  
  return (
    <div className="main-page">
      <Containers>
        {filteredItems.map((item) => (
          <ContainerItem key={item.id} item={item} onRemove={removeFromWatchLater} />
        ))}
      </Containers>
      
    </div>
  );
};

export default Later;

const Containers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  padding: 25px;
  align-items: start;
`;
