import LeftBarMenu from "./LeftBarMenu";
import LeftBarSubscr from "./LeftBarSubscr";

export default function LeftBar({ setChannel, subscribes }) {
  return (
    <div className="left-bar-wrapper">
      <div className="left-bar">
        <LeftBarMenu />
        <LeftBarSubscr setChannel={setChannel} subscribes={subscribes} />
      </div>
    </div>
  );
}
