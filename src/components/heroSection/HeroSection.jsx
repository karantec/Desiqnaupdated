import { lazy, Suspense } from "react";
const Page = lazy(() => import("../Features/page"));
import { data } from "./data/data";
import Feature1 from "../Recent copy/components/Feature";
import RecPage1 from "../Recent copy/page";
import { Link } from "react-router-dom";


const Lower = lazy(() => import("../Lower/Page"));
const CPPage = lazy(() => import("../Features copy/page"));
const RecPage = lazy(() => import("../Recent/page"));

function HeroSection() {
  return (
    <>
      <section className="mt-[-1rem]">
        <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
          <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:justify-center">
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
                <li className="mb-4 md:items-start leading-normal text-md text-gray-900 font-sans font-bold">
                  {data.ul1}
                </li>
                <li className="mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold">
                  <span className="text-red-500">558 </span>Students from Tier-3
                  colleges have Cracked{" "}
                  <span className="text-red-500">20+ LPA</span> offers in the
                  last <span className="text-red-500">10 months.</span>
                </li>
                <li className="mb-4 md:items-start leading-normal text-md text-gray-900 font-sans font-bold">
                  Separate Live training batch for Beginners vs Intermediates
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  {data.ul3}
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  {data.ul5}
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  {data.ul6}
                </li>
                <li className="mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold">
                  {data.ul4}
                </li>
              </ol>

              <div className="flex  flex-wrap  md:justify-start space-x-6 space-y-4">
                {/* Move buttons here */}
               
                <a
                aria-label="contact"
                
                  href="https://docs.google.com/forms/d/1OIvUbH5RLfmjMNv8Dabz5y9VSbuK9Zon425W8ZCzY6Q/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button role="button" className="text-red hover:before:bg-red border-2 rounded-lg border-orange-500 relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10  text-2xl ">
                      {data.button}
                     
                    </span>
                    
                  </button>
                </a>
                <a
                aria-label="contact"
                  href="https://wa.me/918879355057"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button role="button" className="text-red hover:before:bg-red border-2 pl-1 rounded-lg border-orange-500 relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10  text-xl ">
                      {data.button1}
                     
                    </span>
                    
                  </button>
                  
                </a>
                <a
                  aria-label="course"
                  href="https://drive.google.com/file/d/1FG_ovSM5tvQ1lJBLSTgQB-pLW7NPlo_E/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button role="button" className="text-red hover:before:bg-red border-2 rounded-lg border-orange-500 relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10  text-2xl ">
                      {data.butt2}
                    </span>
                  </button>
                </a>
              </div>
              <br/>
            
                  
            </div>
            
            <div className="md:w-1/2 mt-[-2rem] w-full lg:max-w-lg">
              <img
                className="object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src={data.img}
              />
            </div>
          </div>
        </section>

      </section>
     
      <Suspense fallback={<></>}>
     <RecPage1/>
        <RecPage />
        
        <Page />
      
        <CPPage />
        <Lower />
      </Suspense>
    </>
  );
}

export default HeroSection;
