import { yotubeBox } from "../yotubeReducer";
import ContainerItem from "./ContainerItem";
import { filterYotubeBox, searchYotubeBox } from "../yotubeReducer";
import { useState, useEffect } from "react";

export default function MainPage({ channel, searcher }) {
  const [subscribes, setSubscribes] = useState([]);
  useEffect(() => {
    const storedSubscribes =
      JSON.parse(localStorage.getItem("subscribes")) || [];
    setSubscribes(storedSubscribes);
  }, []);

  const handleSubscribe = (newChannel) => {
    const updatedSubscribes = [...subscribes, newChannel];
    setSubscribes(updatedSubscribes);
    localStorage.setItem("subscribes", JSON.stringify(updatedSubscribes));
  };

  if (searcher) {
    return (
      <div className="main-page">
        <div className="containers">
          {searchYotubeBox(searcher).map((item) => (
            <ContainerItem
              item={item}
              handleSubscribe={handleSubscribe}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }

  if (channel) {
    return (
      <div className="main-page">
        <div className="containers">
          {filterYotubeBox(channel).map((item) => (
            <ContainerItem
              item={item}
              handleSubscribe={handleSubscribe}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="main-page">
      <div className="containers">
        {yotubeBox.map((item) => (
          <ContainerItem
            item={item}
            handleSubscribe={handleSubscribe}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
