import LeftBarMenu from "./LeftBarMenu";
import LeftBarSubscr from "./LeftBarSubscr";
import styled from "styled-components";

export default function LeftBar({ setChannel, subscribes }) {
  return (
    <LeftBarWrap>
      <div className="left-bar">
        <LeftBarMenu />
        <LeftBarSubscr setChannel={setChannel} subscribes={subscribes} />
      </div>
    </LeftBarWrap>
  );
}

const LeftBarWrap = styled.div`
  position: fixed;
  background-color: #fff;
  overflow: scroll;
  height: 100%;
`;
