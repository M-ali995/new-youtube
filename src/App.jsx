import "./style.scss";
import Header from "./Components/Header";
import LeftBar from "./Components/LeftBar";
import MainPage from "./Components/MainPage";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import VideoPage from "./Components/VideoPage";
import History from "./Components/History";
import Later from "./Components/Later";
import styled from "styled-components";
import { yotubeBox } from "./yotubeReducer";

function App() {
  const [channel, setChannel] = useState(null);
  const [searcher, setSearcher] = useState("");
  const [subscribes, setSubscribes] = useState([]);

  useEffect(() => {
    const storedSubscribes =
      JSON.parse(localStorage.getItem("subscribes")) || [];
    setSubscribes(storedSubscribes);

    if (!localStorage.getItem("videos")) {
      localStorage.setItem("videos", JSON.stringify(yotubeBox));
    }
  }, []);

  const handleSubscribe = (newChannel) => {
    if (!subscribes.includes(newChannel)) {
      const updatedSubscribes = [...subscribes, newChannel];
      setSubscribes(updatedSubscribes);
      localStorage.setItem("subscribes", JSON.stringify(updatedSubscribes));
    }
  };

  function searchingVideo(query) {
    setSearcher(query);
  }

  const selectChannel = (channelName) => {
    setChannel(channelName);
  };

  function resetSearchFilter() {
    setChannel(null);
    setSearcher("");
  }

  return (
    <div className="app">
      <Header searchingVideo={searchingVideo} />
      <FullPageDiv>
        <LeftBar setChannel={selectChannel} subscribes={subscribes} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                channel={channel}
                searcher={searcher}
                handleSubscribe={handleSubscribe}
              />
            }
          />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/later" element={<Later />} />
        </Routes>
      </FullPageDiv>
    </div>
  );
}

export default App;

const FullPageDiv = styled.div`
  display: flex;
  gap: 50px;
`;
