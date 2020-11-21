import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // To make sure we send the video along with onVideoSelect callback we use arrow function inside onClick method 
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            {/* <video src="https://youtu.be/lDzywboBI2M"></video> */}
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;