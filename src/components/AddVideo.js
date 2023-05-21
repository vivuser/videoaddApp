import useVideoDispatch from "../Hooks/videodispatch";
import "./AddVideo.css";
import {  useEffect, useRef, useState } from "react";

const initialState= {
  time: "11 years ago",
  channel: "ReacPrac",
  verified: true,
  title: '',
  views: ''
}

function AddVideo({ editableVideo}) {
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch()
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type: 'UPDATE', payload:video})
    }else{
      dispatch({type: 'ADD', payload:video})
    }
    console.log(video);
    setVideo(initialState);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
 
  useEffect(()=>{
    if (editableVideo){
    setVideo(editableVideo)
    }
    inputRef.current.focus()
  
  },[editableVideo])

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value = {video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value = {video.views}
      />
      <div>
        <button
          onClick={handleSubmit}        
          >
          {editableVideo?'Edit': 'Add'} Video
        </button>
      </div>
    </form>
  );
}
export default AddVideo;
