function VideoGallery() {
  const videos = [
    "https://www.youtube.com/embed/tRddj5uBAHs?si=chc_cMSXLfdOXre2",
    "https://www.youtube.com/embed/v6tOS9Lf2VQ?si=eb6dw1_3C0BTTMda",
    "https://www.youtube.com/embed/QUfiCT9RyGk?si=uvnQdtrdSmwfbqgk",
    "https://www.youtube.com/embed/vky0RHci1Oc?si=Dz8EWh4bvDFb_3-Q",
    "https://www.youtube.com/embed/Af0rakBI7RE?si=fREXjvoIdLULvNaw",
    "https://www.youtube.com/embed/2fQEiI2x9RM?si=Oo8PkUiOg9g1Lazu",
  ];

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <h1 className="text-2xl sm:text-1xl md:text-5xl lg:text-5xl text-center font-bold font-sans py-7">
      Take A Glimpse of Our DSA Class <br/> Taught by <span className="text-red-600"> Kumar K Sir </span> 
</h1>
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
    </div>
  );
}

export default VideoGallery;