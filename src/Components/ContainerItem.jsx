import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ContainerItem({ item, handleSubscribe }) {
  const watchLater = () => {
    let storedIds = JSON.parse(localStorage.getItem("watchLater")) || [];
    console.log(storedIds);

    storedIds = storedIds.map(Number);

    if (!storedIds.includes(item.id)) {
      storedIds.push(item.id);
      localStorage.setItem("watchLater", JSON.stringify(storedIds));
    }
  };

  const addSubscribe = () => {
    handleSubscribe(item.channelName);
  };

  return (
    <div>
      <NavLink to={`/video/${item.id}`} className="container-item">
        <ImgContainer>
          <Image src={item.url} alt={item.description} />
        </ImgContainer>
        <ContainerInfo>
          <FlexBox>
            <ImageIcon src={item.iconUrl} alt={item.channelName} />
            <Description>{item.description}</Description>
          </FlexBox>
          <ContainerInfoSpans>
            <SpanInfo>{item.views} просмотров</SpanInfo>
            <SpanInfo>{item.channelName}</SpanInfo>
            <SpanInfo> &#9679; {item.date}</SpanInfo>
          </ContainerInfoSpans>
        </ContainerInfo>
      </NavLink>
      {window.location.pathname !== "/later" && (
        <div>
          <button onClick={watchLater}>add</button>
          <button onClick={addSubscribe}>Subscribe</button>
        </div>
      )}
    </div>
  );
}

const Description = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const ContainerInfoSpans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 50px;
`;

const SpanInfo = styled.span`
  color: #6b6b6b;
`;

const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;
