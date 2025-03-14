import { yotubeBox } from "../yotubeReducer";
import ContainerItem from "./ContainerItem";
import { filterYotubeBox, searchYotubeBox } from "../yotubeReducer";

export default function MainPage({ channel, searcher, handleSubscribe }) {
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
