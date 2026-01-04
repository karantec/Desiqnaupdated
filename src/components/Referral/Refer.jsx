import React, { useState, useEffect } from 'react';
import { Download, Share2, MessageCircle, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const MediaCarousel = () => {
  // Sample JSON data with both images and YouTube Shorts
  const mediaData = [
    // {
    //   id: 1,
    //   type: "image",
    //   url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457436/paypal1_ybacrh.jpg",
    //   alt: "PayPal 31LPA SDE Referral Chat Screenshot",
    //   title: "PayPal 31LPA Referral Chat",
    //   filename: "paypal-referral.jpg"
    // },
    {
      id: 2,
      type: "youtube",
      videoId: "W0lWXMxMbfM", // Your YouTube Shorts video ID
      title: "Success Story - How I Got Referred",
      description: "Watch this inspiring journey of getting a referral"
    },
    // {
    //   id: 3,
    //   type: "image",
    //   url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751456632/quad_ucxg7r.jpg",
    //   alt: "Qualcomm 28LPA SDE Referral Chat Screenshot",
    //   title: "Qualcomm 28LPA Referral Chat",
    //   filename: "qualcomm-referral-1.jpg"
    // },
    {
      id: 4,
      type: "youtube",
      videoId: "bvShzG1T0Rs", // Replace with actual YouTube Shorts video ID
      title: "Tips for Getting Tech Referrals",
      description: "Expert advice on landing referrals at top tech companies"
    },
    // {
    //   id: 5,
    //   type: "image",
    //   url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457348/quad2_wzewsv.jpg",
    //   alt: "Qualcomm 28LPA Referral Chat Screenshot",
    //   title: "Qualcomm 28LPA Referral Chat",
    //   filename: "qualcomm-referral-2.jpg"
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Auto-swipe functionality (paused when video is playing)
  useEffect(() => {
    if (!isAutoPlaying || videoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change media every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, videoPlaying, mediaData.length]);

  // Extract YouTube video ID from URL or return the ID if already provided
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
  };

  const handleDownload = () => {
    const currentMedia = mediaData[currentIndex];
    if (currentMedia.type === 'image') {
      const link = document.createElement('a');
      link.href = currentMedia.url;
      link.download = currentMedia.filename || 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For YouTube videos, open in new tab
      window.open(`https://youtube.com/watch?v=${currentMedia.videoId}`, '_blank');
    }
  };

  const handleShare = async () => {
    const currentMedia = mediaData[currentIndex];
    const shareUrl = currentMedia.type === 'youtube' 
      ? `https://youtube.com/watch?v=${currentMedia.videoId}`
      : window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentMedia.title,
          text: currentMedia.description || currentMedia.alt,
          url: shareUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setVideoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? mediaData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setVideoPlaying(false);
    setCurrentIndex(currentIndex === mediaData.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setVideoPlaying(false);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentMedia = mediaData[currentIndex];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-r to-red-50 from-yellow-100">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="rounded-2xl shadow-xl overflow-hidden">
          <h1 className="text-center font-bold text-gray-700 font-sans text-4xl mb-8 uppercase">
            WE PROVIDE REFERRAL SUPPORT
          </h1>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  {currentMedia.type === 'youtube' && <Play size={24} />}
                  {currentMedia.title}
                </h2>
                <p className="text-blue-100">
                  {currentMedia.description || currentMedia.alt}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                  title={currentMedia.type === 'youtube' ? "Open on YouTube" : "Download Image"}
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={handleShare}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <Share2 size={20} />
                </button>
                <button
                  onClick={toggleAutoPlay}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isAutoPlaying 
                      ? 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white' 
                      : 'bg-white bg-opacity-40 text-white'
                  }`}
                  title={isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
                >
                  {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Media Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Media Display */}
            <div className="p-4">
              <div className="relative rounded-lg overflow-hidden shadow-md bg-black">
                {currentMedia.type === 'image' ? (
                  <>
                    <img
                      src={currentMedia.url}
                      alt={currentMedia.alt}
                      className="w-full h-96 object-contain transition-opacity duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center h-96 bg-gray-200 text-gray-500">
                      <p>Image failed to load</p>
                    </div>
                  </>
                ) : (
                  <div className="aspect-[9/16] max-h-96 mx-auto">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentMedia.videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                      title={currentMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      onLoad={() => setVideoPlaying(false)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Media Counter & Type Indicator */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {mediaData.length}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                currentMedia.type === 'youtube' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-blue-600 text-white'
              }`}>
                {currentMedia.type === 'youtube' ? 'VIDEO' : 'IMAGE'}
              </div>
            </div>
          </div>

          {/* Dots Indicator with Media Type Icons */}
          <div className="flex justify-center space-x-3 py-6">
            {mediaData.map((media, index) => (
              <button
                key={media.id}
                onClick={() => goToSlide(index)}
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-110 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={media.title}
              >
                {media.type === 'youtube' ? (
                  <Play size={12} className="text-white" />
                ) : (
                  <div className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-600'
                  }`} />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Status */}
          {isAutoPlaying && (
            <div className="text-center pb-4">
              <span className="text-sm text-gray-500">
                Auto-playing • Next in 4s
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;