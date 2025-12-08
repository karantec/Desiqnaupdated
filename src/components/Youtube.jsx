import React from "react";

const VIDEO_ID = "Qx6n3mgY4tg";

const YouTubeEmbedAuto = () => {
  // Build embed URL with autoplay, muted and loop (playlist=VIDEO_ID required for loop)
  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0`;

  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg relative">
        <iframe
          className="w-full h-full"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbedAuto;
