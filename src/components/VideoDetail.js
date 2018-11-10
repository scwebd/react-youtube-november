import React from "react";

const VideoDetail = props => {
    if (!props.selectedVideo) {
        return <h3>Loading spinner</h3>
    }    

    const videoId = props.selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="???" className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
        </div>
    )
}

export default VideoDetail;