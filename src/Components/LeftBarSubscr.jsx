import { channels } from "../yotubeReducer";

export default function LeftBarSubscr({ setChannel, }) {
  const clickHandler = (name) => {
    console.log(name);
    setChannel(name);
  };

  return (
    <div className="left-barSubcr">
      <div className="zag">Подписки</div>
      {channels.map((item) => (
        <span key={item.id} onClick={() => clickHandler(item.name)}>
          <img src={item.url} alt={item.name} />
          {item.name}
        </span>
      ))}
      <div>
      </div>
    </div>
  );
}
