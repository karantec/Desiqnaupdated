import React, { useState, useEffect } from 'react';
import { Download, Share2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  // Sample JSON data - replace with your actual data
  const imageData = [
    {
      id: 1,
      url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457436/paypal1_ybacrh.jpg",
      alt: "PayPal 31LPA SDE Referral Chat Screenshot",
      title: "PayPal 31LPA Referral Chat",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751456632/quad_ucxg7r.jpg",
      alt: "Qualcomm 28LPA SDE Referral Chat Screenshot",
      title: "Qualcomm 28LPA Referral Chat",
   
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457348/quad2_wzewsv.jpg",
       alt: "Qualcomm 28LPA Referral Chat Screenshot",
      title: "Qualcomm 28LPA Referral Chat",
    },
    // {
    //   id: 4,
    //   url: "https://picsum.photos/800/600?random=3",
    //   alt: "Sample Image 4",
    //   title: "Sample Image 4",
    //   description: "Fourth sample image for carousel",
    //   filename: "sample-image-4.jpg"
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-swipe functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, imageData.length]);

  const handleDownload = () => {
    const currentImage = imageData[currentIndex];
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = currentImage.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const currentImage = imageData[currentIndex];
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? imageData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === imageData.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-r to-red-50 from-yellow-100">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className=" rounded-2xl shadow-xl overflow-hidden">
            <h1 className="text-center font-bold text-gray-700 font-sans text-4xl mb-8 uppercase top-perfor">WE PROVIDE REFERRAL SUPPORT</h1>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
           
            <h2 className="text-2xl font-bold mb-2">{imageData[currentIndex].title}</h2>
            <p className="text-blue-100">{imageData[currentIndex].description}</p>
          </div>

          {/* Image Container */}
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

            {/* Image Display */}
            <div className="p-4">
              <div className="relative rounded-lg overflow-hidden shadow-md ">
                <img
                  src={imageData[currentIndex].url}
                  alt={imageData[currentIndex].alt}
                  className="w-full h-96 object-contain transition-opacity duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center h-96 bg-gray-200 text-gray-500">
                  <p>Image failed to load</p>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {imageData.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 py-4">
            {imageData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        
          
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;