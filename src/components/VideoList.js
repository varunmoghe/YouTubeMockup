import React from 'react';
import VideoItem from './VideoItem';

// we can directly use ({ videos }) object instead of (props.videos) according to ES2015 syntax
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId}  onVideoSelect={onVideoSelect} video={video} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;