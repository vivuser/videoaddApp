import Playbutton from "./Playbutton";
import Video from "./Video";
import useVideos from "../Hooks/videos";
import axios from "axios";
import { useEffect, useState } from "react";
import useVideoDispatch from "../Hooks/videodispatch";

function VideoList({ editVideo}){

  const url = "https://api.mockaroo.com/api/c6401170?count=10&key=358dc7d0"

    const videos = useVideos()
    const dispatch = useVideoDispatch();
    async function handleClick(){
      const res = await axios.get(url);
      console.log('getVideos', res.data)
      dispatch({type:'LOAD', payload: res.data})
    }
 
    useEffect(()=>{
      async function getVideos(){
        const res = await axios.get(url);
        console.log('getVideos', res.data)
        dispatch({type:'LOAD', payload: res.data})
      }
        getVideos()
    },[dispatch])

    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo = {editVideo}
            >
              <Playbutton
                onPlay={() => console.log("Playyy", video.title)}
                onPause={() => console.log("Pause", video.title)}
              >
                {video.title}
              </Playbutton>
            </Video>
          ))}
          <button onClick={handleClick}>Get Videos</button>
          </>
    )

}

export default VideoList;