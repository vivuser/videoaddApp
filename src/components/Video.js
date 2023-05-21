import { useContext, useEffect } from 'react';
import './Video.css';
import ThemeContext from '../Context/ThemeContext';
import useVideoDispatch from '../Hooks/videodispatch';

function Video({title, channel = 'loaderdost',views, time,channelName, verified, id, children, editVideo}) {
let channelJSX;
const theme = useContext(ThemeContext)
const dispatch = useVideoDispatch()

    useEffect(()=> {
        console.log('video playing', id)
    },[id])

    return ( 
    <>
    <div className={`container ${theme}`}>
    <button className='close' onClick={()=>  dispatch({type: 'DELETE', payload:id})}    >X</button>
    <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
    <div className='pic'>
    <img src={`https://picsum.photos/id/${id}/200/300`} alt="youtubepic" />
    </div>
    <div className ='title'>{title}</div>
    <div className='channel'>{channel} {verified && '✅'} </div>

    <div className='views'>
    {views} views <span>.</span> {time}
    </div>
    {children}
    </div>
    </>
    )
}

export default Video;