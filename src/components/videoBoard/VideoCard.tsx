import React from "react";

type videoType = {
  src: string;
  title: string;
  des: string;
};

const VideoCard = ({ src, des, title }: videoType) => {
  return (
    <div>
      <iframe
        width="260"
        height="150"
        src={src}
        title="YouTube video player"
        className="rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="capitalize w-48 truncate">{title}</h3>
      <h5 className="text-xs uppercase text-gray-400">{des}</h5>
    </div>
  );
};

export default VideoCard;
