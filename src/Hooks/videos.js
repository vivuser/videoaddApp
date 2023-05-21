import { useContext } from "react";
import VideosContext from "../Context/VideoContext";

function useVideos(){
    return useContext(VideosContext)
}

export default useVideos;