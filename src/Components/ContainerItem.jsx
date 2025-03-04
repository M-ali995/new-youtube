import { NavLink } from "react-router-dom";

export default function ContainerItem({ item }) {
  return (
    <NavLink to={`/video/${item.id}`} className="container-item">
      <div className="container-img">
        <img src={item.url} alt={item.description} />
      </div>
      <div className="container-info">
        <div className="container-flex">
          <img
            className="container-icon"
            src={item.iconUrl}
            alt={item.channelName}
          />
          <span className="container-description">{item.description}</span>
        </div>
        <div className="container-spans">
          <span className="container-views">{item.views} просмотров</span>
          <span className="container-name">{item.channelName}</span>
          <span className="container-date"> &#9679; {item.date}</span>
        </div>
      </div>
    </NavLink>
  );
}
