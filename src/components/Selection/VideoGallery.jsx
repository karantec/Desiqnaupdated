
function VideoGallerys() {
  const videos = [
    "https://www.youtube.com/embed/j1SOLU_UVkI?si=X3nOF70nY1Y1cHBc",
    "https://www.youtube.com/embed/iCIa-hY3Ov4?si=qtYMWcqbnFQUkkqC",
    "https://www.youtube.com/embed/JPz8H6uumgQ?si=DhPnS8fHXMO7_aGQ",
    "https://www.youtube.com/embed/IZv7He5jGJ4?si=37LSNW0TdXfFTn3B",
    "https://www.youtube.com/embed/0y1_16CvdRA?si=v8P68daVU9207Hq1",
    "https://www.youtube.com/embed/A4KIjxptTLQ?si=uKAVYlDlT-vWLPnV",
    "https://www.youtube.com/embed/8w0dh34hJNM?si=00c0tNPHNQJAXFz7",
  ];

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
        {videos.map((videoUrl, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9 items-center">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={`YouTube video ${index + 1}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

          </div>
          
        ))}
        
      </div>
      <div className='inline-flex flex-col items-center justify-center'>
          <button className=" mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-2xl">View More</span>
          </button>
        </div>
    </div>
  );
}

export default VideoGallerys;