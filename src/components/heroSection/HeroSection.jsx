import { lazy, Suspense } from "react";
const Page = lazy(() => import("../Features/page"));
import { data } from "./data/data";
import { FaWhatsapp } from "react-icons/fa";
import Feature1 from "../Recent copy/components/Feature";
import RecPage1 from "../Recent copy/page";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ChatSwiper from "../Referral/Refer";
import DirectImageDisplay from "../Referral/Refer";
import ImageCarousel from "../Referral/Refer";
import YouTubeEmbed from "../Youtube";
import CourseComparison from "../Comparison/Compare";

const Lower = lazy(() => import("../Lower/Page"));
const CPPage = lazy(() => import("../Features copy/page"));
const RecPage = lazy(() => import("../Recent/page"));

function HeroSection() {
  return (
    <>
      <section className="mt-[-1rem]">
        <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
          <marquee
            className="mt-4 pt-4 text-red-600 text-3xl font-bold"
            scrollamount="20"
          >
            Looking for a High-Paying Job/Internship? With 1-1 mentoring,
            structured training, and referral support, we help you land your
            dream offer 🚀
          </marquee>

          <div className="container mx-auto px-5 py-28 md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-15 mb-16 md:mb-0  ml-5 ">
              <span className="text-xl text-black font-sans font-bold edu-revo">
                {data.span1} <span className="text-red-700">{data.span2}</span>
              </span>
              <h1 className="font-sans leading-snug text-5xl   mt-4  font-extrabold text-gray-900 banner-title">
                {data.h1} <span className="mt-6 text-red-900  ">{data.h2}</span>
                <p className="font-sans text-3xl  bg-red-500 hidden lg:inline-block" />
                {data.subh1} {data.subh2}
              </h1>
              <ol className="mt-3 ">
                <li className="mb-4 leading-normal text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{data.ul1}</span>
                  </div>
                </li>
                <li className="mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-red-500 text-2xl">
                      {" "}
                      DSA Mentor: 2200+ (Guardian) rated on {"    "}
                      <a
                        href="https://leetcode.com/u/godiswithme/"
                        className="text-blue-800"
                      >
                        Leetcode (Top 1% in world),
                        
                      </a>{" "}
                       <a href="https://www.linkedin.com/posts/kumark1_codeforces-dsa-rating-activity-7389162839816572928-9TVp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADB1e44BA43UYjFx2BwtGFrtyTJFuENef5c" className="text-blue-800"> Expert Rated on  Codeforces</a>
                    </span>
                    
                  </div>
                </li>
                <li className="mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-blue-800 text-2xl">
                      <a href="https://www.youtube.com/watch?v=j1SOLU_UVkI&ab_channel=KumarK%5BAmazon%5D">
                        Youtube
                      </a>{" "}
                      <span className="text-red-500">&& </span>
                      <a
                        href="https://www.linkedin.com/in/kumark1/"
                        className="ml-2 text-blue-800"
                      >
                        Linkedin (1 Lakh + followers)
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-red-500 text-2xl">
                      {" "}
                      1158 {"  "} Students from Tier-3 colleges have Cracked 20+
                      LPA {"  "} offers in the last 18 months.
                    </span>
                  </div>
                </li>
                 <li className="mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-red-500 text-2xl">
                      {" "}
                      Kumar K secures <a href="https://www.linkedin.com/feed/update/urn:li:activity:7384452805387784192/"><span  className="text-blue-500">All India Rank 7  (World Rank 83)</span></a> in Facebook(Meta) HackerCup 2025
                    </span>
                  </div>
                </li>
                <li className="mb-4 md:items-start leading-normal text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Separate Live training Cohort for Beginners vs
                      Intermediates{" "}
                    </span>
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span> {data.ul3}</span>
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span> {data.ul5}</span>
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span> {data.ul6}</span>
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    {data.ul4}
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                   Price till December 16- {"    "}
                                      
                    <span className="text-red-500 text-2xl ml-2">3280 </span>
                  </div>
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  <div className="flex items-start">
                    <FaArrowAltCircleRight className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    Price from December 17 - {"    "}
            
                    <span className="text-2xl ml-4">₹10000</span>
                    {"    "} {"    "}
                  </div>
                </li>
              </ol>

              <div className="flex flex-wrap gap-4 md:justify-start">
                {/* Google Form Button */}
                <a
                  aria-label="contact"
                  href="https://docs.google.com/forms/d/1t_Po_G3jdI6D1xfOGyPvSQeyE7fdmlW7MD-WLCr_n2Y/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    role="button"
                    className="border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      {data.button}
                    </span>
                  </button>
                </a>
                 <Link to="/achiver"> <button
                    role="button"
                    className="border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-md font-semibold">
                      Recent 500 selections (20+LPA)
                    </span>
                  </button>
                  </Link>

                {/* Another Button */}
                <a
                  aria-label="whatsapp"
                  href="https://wa.me/919798316854"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    role="button"
                    className="border-2 rounded-lg border-green-500 relative h-12 w-52 overflow-hidden bg-white px-3 text-green-600 shadow-2xl transition-all 
               before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
               before:bg-green-500 before:transition-all before:duration-500 
               hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      WhatsApp Call 📞
                    </span>
                  </button>
                </a>

                {/* Program Details Button */}
                <a
                  aria-label="program"
                  href="https://desiqna-details-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    role="button"
                    className="border-2 rounded-lg border-orange-500 relative h-12 w-56 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      {" "}
                      Program Details
                    </span>
                  </button>
                </a>

                {/* WhatsApp Button */}
                <a
                  aria-label="whatsapp"
                  href="https://api.whatsapp.com/send/?phone=918433719235&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    role="button"
                    className="border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      {data.button1}
                    </span>
                  </button>
                </a>



                
               
                {/* Drive Button */}
                <a
                  aria-label="course"
                  href="https://drive.google.com/file/d/1FG_ovSM5tvQ1lJBLSTgQB-pLW7NPlo_E/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    role="button"
                    className="border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      {data.butt2}
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 mt-[-2rem] w-full lg:max-w-lg">
              <img
                className="object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1764168224/WhatsApp_Image_2025-11-26_at_20.06.59_10503e62_ra3jnz.jpg"
              />
              <YouTubeEmbed />
            </div>
          </div>
        </section>
      </section>

      <Suspense fallback={<></>}>
      <CourseComparison/>
        <RecPage1 />

        <RecPage />
        <ImageCarousel />

        <Page />

        <CPPage />
        <Lower />
      </Suspense>
    </>
  );
}

export default HeroSection;
