import React, { useState } from "react";

const YouTubeEmbed = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex justify-center items-center py-6 px-4">
      <div className="w-full max-w-full sm:max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg relative">
        {!play ? (
          <div
            className="w-full h-full cursor-pointer relative"
            onClick={() => setPlay(true)}
            role="button"
            aria-label="Play video"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setPlay(true);
            }}
          >
            {/* Preview Image — fills the aspect container */}
            <img
              src="https://res.cloudinary.com/derywmjpv/image/upload/v1767509598/Qx6n3mgY4tg-SD_m7r7jm.jpg"
              alt="Video Preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
              <button
                className="flex items-center justify-center bg-white/95 text-red-600 rounded-full p-3 sm:p-4 shadow-lg transform transition-transform active:scale-95"
                aria-label="Play"
              >
                {/* Scales on larger screens */}
                <span className="text-xl sm:text-2xl font-bold">▶</span>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Qx6n3mgY4tg?autoplay=1"
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
