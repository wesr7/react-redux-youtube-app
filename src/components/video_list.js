import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos }) => {
	const videoListItem = videos.map(video => <VideoListItem key={video.etag} video={video} />)
	return(
		<ul className="col-md-4 list-group">
			{videoListItem}
		</ul>
	)
}

export default VideoList;