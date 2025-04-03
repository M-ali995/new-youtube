import React, { useState, useEffect } from "react";
import ContainerItem from "./ContainerItem";
import { yotubeBox } from "../yotubeReducer";
import styled from "styled-components";

const History = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("history")) || [];

    const storedIdsAsNumbers = storedIds.map(Number);

    const filteredData = yotubeBox.filter((item) =>
      storedIdsAsNumbers.includes(item.id)
    );

    console.log(filteredData);
    setFilteredItems(filteredData);
  }, []);

  return (
    <div className="main-page">
      <Containers>
        {filteredItems.map((item) => (
          <ContainerItem item={item} key={item.id} />
        ))}
      </Containers>
    </div>
  );
};

export default History;

const Containers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  padding: 25px;
  align-items: start;
`;
