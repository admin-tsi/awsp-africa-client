import React from 'react';

type Props = {};

const VideoContainer = (props: Props) => {
  return (
    <video
      className="inset-0 w-full h-64 md:h-full object-cover -z-10 rounded-xl"
      controls
    >
      <source src="home/a.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoContainer;
