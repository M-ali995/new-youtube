import { yotubeBox, yotubeBoxArray } from "../yotubeReducer";
import ContainerItem from "./ContainerItem";
import { filterYotubeBox, searchYotubeBox } from "../yotubeReducer";
import styled from "styled-components";

export default function MainPage({ channel, searcher, handleSubscribe }) {
  if (searcher) {
    return (
      <div className="main-page">
        <Containers>
          {searchYotubeBox(searcher).map((item) => (
            <ContainerItem
              item={item}
              handleSubscribe={handleSubscribe}
              key={item.id}
            />
          ))}
        </Containers>
      </div>
    );
  }

  if (channel) {
    return (
      <div className="main-page">
        <Containers>
          {filterYotubeBox(channel).map((item) => (
            <ContainerItem
              item={item}
              handleSubscribe={handleSubscribe}
              key={item.id}
            />
          ))}
        </Containers>
      </div>
    );
  }

  return (
    <div className="main-page">
      <Containers className="containers">
        {yotubeBox
          ? yotubeBox.map((item) => (
              <ContainerItem
                item={item}
                handleSubscribe={handleSubscribe}
                key={item.id}
              />
            ))
          : yotubeBoxArray.map((item) => (
              <ContainerItem
                item={item}
                handleSubscribe={handleSubscribe}
                key={item.id}
              />
            ))}
      </Containers>
    </div>
  );
}

const Containers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  padding: 25px;
  align-items: start;
`;
