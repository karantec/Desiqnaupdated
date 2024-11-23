import React, { lazy, Suspense } from "react";
const Section = lazy(() => import("./components/section"));
const LowerFeature = lazy(() => import("./components/LowerFeature"));
const LowerTestimonial = lazy(() => import("./components/LowerTestimonial"));
const VideoGallery = lazy(() => import("../VideoGallery/VideoGallery"));
const VideoGallerys = lazy(() => import("../Selection/VideoGallery"));
function Lower() {
  return (
    <>
      <Suspense fallback={<></>}>
        <div className="relative flex flex-col   bg-gradient-to-r to-red-50 from-yellow-100 items-center justify-center overflow-x-hidden pb-10">
          <div className="flex flex-col items-center justify-center flex-wrap mt-56 w-[80rem] ">
            <div className=" absolute bg-slate-10 top-[3rem]">
              <Section />
            </div>
            <div className="mt-[60rem] sm:mt-[40rem] lg:mt-[26rem] flex flex-col items-center justify-center mb-[10rem] bg-gradient-to-r to-red-50 from-yellow-100">
              <div className="">
                <h1 className="text-md mt-34 pt-[10rem] lg:text-3xl text-slate-500 font-bold text-center  md:text-center">
                  Why Join Our Personalized 1-1
                  <br />{" "}
                  <span className="text-black">
                    Mentoring + Daily Live Training Program?
                  </span>
                </h1>
                <p className="text-1xl  lg:text-2xl sm:mt-[10rem] ml-2 mb-10 mt-6 md:text-center text-slat-400 text-center px-[30rem] lg:px-[12rem]">
                  Only We Train For{" "}
                  <span className="text-red-500 font-bold">
                    {" "}
                    Hard Unseen Online Test + Interview DSA
                  </span>{" "}
                  Problems of Top Tech Companies in India.
                </p>
                <p className="text-2xl lg:text-1xl ml-2 mb-10 mt-4 md:text-center text-slat-400 text-center px-[30rem] lg:px-[12rem]">
                  Our 850 hour DSA + OA + CP course gets updated on monthly
                  basis with more content and training according to the recent
                  trends of DSA problems being asked in company online test +
                  interviews; that’s why it is the best course in the country
                </p>
              </div>
              <VideoGallerys />
            </div>
            <div>
              <VideoGallery />
            </div>
          </div>
          <div>
            <div className="mt-5 pb-5">
              <LowerFeature />
            </div>
          </div>
          <LowerTestimonial />
        </div>
      </Suspense>
    </>
  );
}

export default Lower;
