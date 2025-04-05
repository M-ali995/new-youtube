import React, { useState, useEffect } from "react";
import ContainerItem from "./ContainerItem";
import { yotubeBox } from "../yotubeReducer";
import styled from "styled-components";

const Liked = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("likes")) || [];
    console.log(JSON.parse(localStorage.getItem("likes")));

    const ids = obj.map((item) => Number(item.videoId));

    const filteredData = yotubeBox.filter((item) => ids.includes(item.id));

    console.log(ids);
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

export default Liked;

const Containers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  padding: 25px;
  align-items: start;
`;
