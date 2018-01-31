import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
	const videoListItem = videos.map(video => <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />)
	return(
		<ul className="col-md-4 list-group">
			{videoListItem}
		</ul>
	)
}

export default VideoList;