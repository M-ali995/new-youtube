import LeftBarMenu from "./LeftBarMenu";
import LeftBarSubscr from "./LeftBarSubscr";

export default function LeftBar({ setChannel }) {
  return (
    <div className="left-bar-wrapper">
      <div className="left-bar">
        <LeftBarMenu />
        <LeftBarSubscr setChannel={setChannel} />
      </div>
    </div>
  );
}
