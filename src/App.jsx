import "./style.scss";
import Header from "./Components/Header";
import LeftBar from "./Components/LeftBar";
import MainPage from "./Components/MainPage";
import { useState } from "react";
import { Routes, Route } from "react-router";
import VideoPage from "./Components/VideoPage";
import History from "./Components/History";

function App() {
  const [channel, setChannel] = useState(null);
  const [searcher, setSearcher] = useState("");

  function searchingVideo(query) {
    setSearcher(query);
    console.log(query);
  }

  const selectChannel = (channelName) => {
    setChannel(channelName);
  };

  function resetSearchFilter() {
    setChannel(null)
    setSearcher("")
  }

  return (
    <div className="App">
      <Header searchingVideo={searchingVideo} />
      <div className="fullPage">
        <LeftBar setChannel={selectChannel} />
        <Routes>
          <Route
            path="/"
            element={<MainPage channel={channel} searcher={searcher} />}
          />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/test" element={"test"} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
