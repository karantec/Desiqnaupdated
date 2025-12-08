import React, { useState } from "react";

const YouTubeEmbed = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg relative">
        {!play ? (
          <div
            className="w-full h-full cursor-pointer relative"
            onClick={() => setPlay(true)}
          >P
            {/* Preview Image */}
            <img
              src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1765223485/Qx6n3mgY4tg-SD_tsho8g.jpg"
              alt="Video Preview"
              className="w-full h-96 object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
              <div className="bg-white text-red-600 rounded-full p-4 shadow-lg">
                ▶
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Qx6n3mgY4tg?si=iwXGTkeiSs76ANG3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;