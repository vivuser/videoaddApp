import { useContext, useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import VideosContext from "./Context/VideoContext";
import VideoDispatchContext from "./Context/VideoDispatchContext";
import Counter from "./components/Counter";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("dark");

  const url = "https://api.mockaroo.com/api/c6401170?count=10&key=358dc7d0"

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos, setVideos] = useState(videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
          Switch Mode
        </button>
        <div className={`App ${mode}`} onClick={() => console.log("App")}>
        <Counter></Counter>
          <AddVideo
            editableVideo={editableVideo}
          ></AddVideo>
          <VideoList
            editVideo={editVideo}
          ></VideoList>
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
