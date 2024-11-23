import React, { useState } from 'react';
import { data } from "./data/data";
import Feature from './components/Feature';
import "./Page.css"
import "animate.css"

function Page() {
  const [selectedUser, setSelectedUser] = useState(data.user1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(null);

  const handleImageClick = (userData, index) => {
    setSelectedUser(userData);
    setActiveIndex(index);
    setAnimate('animate__animated animate__slideInRight'); 
    setTimeout(() => {
      setAnimate(null); 
    }, 1000); 
  };

  return (
    <div id="topachiver" className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 pb-10">
      <div className={`${animate}`}>
        <Feature
          p={selectedUser.p}
          h1={selectedUser.h1}
          details={selectedUser.details}
          student={selectedUser.student}
          company={selectedUser.company}
          img={selectedUser.img}
        />
      </div>
      <div className='flex items-center mb-3 gap-5 justify-center flex-wrap'>
        {Object.values(data).map((user, index) => (
          <button key={index} onClick={() => handleImageClick(user, index)} className="image-button">
            <img
              className={`relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white hover:border-4 transition-all duration-500`}
              src={user.img}
              alt={user.company}
            />
          </button>
        ))}
      </div>
      <a href="https://docs.google.com/document/d/1O9ph3IoyLv_B6scRQSaMyemShoOgAtnWBGpiw-FZtTs/edit">
        <div className='inline-flex flex-col items-center justify-center'>
          <button className=" mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-2xl">View More</span>
          </button>
        </div>
      </a>
    </div>
  );
}

export default Page;