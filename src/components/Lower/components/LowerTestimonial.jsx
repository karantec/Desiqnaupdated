import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="max-h-screen bg-gradient-to-r to-red-50 from-yellow-100 flex flex-col items-center justify-center py-5">
      <div className="w-full max-w-6xl mx-auto px-5 py-16 md:py-24 text-gray-800">
        
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-black font-sans">
            What Students <br /> Are Saying
          </h1>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full mt-10">
          <div className="flex gap-6 animate-scroll">
            {[...testimonialData, ...testimonialData, ...testimonialData].map((t, index) => (
              <SliderCard key={index} {...t} />
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-scroll {
            animation: scroll 40s linear infinite;
            width: max-content;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="text-center mt-10">
          <Link
            to="https://docs.google.com/document/d/1nFt_jEgy1X-UaKU2bu3OnC365ADCL-ls_cpXUMJrvx0/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded inline-block"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

const SliderCard = ({ name, content, profile, image, isImage }) => {
  // If it's an image testimonial, render the image
  if (isImage) {
    return (
      <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 overflow-hidden h-auto">
        <img 
          src={image} 
          alt={`Testimonial from ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Otherwise, render the text testimonial
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 p-6 text-gray-800 h-64 flex flex-col">
      <div className="flex justify-center items-center mb-4">
        <h6 className="font-bold text-sm uppercase text-black">{name}</h6>
        {profile !== "#" && (
          <a href={profile} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 ml-3 hover:text-blue-700 text-xl" />
          </a>
        )}
      </div>

      <p className="text-sm text-center leading-relaxed flex-grow overflow-y-auto">
        <span className="text-3xl font-bold text-orange-500 mr-1">"</span>
        {content}
        <span className="text-3xl font-bold text-orange-500 ml-1">"</span>
      </p>
    </div>
  );
};

const testimonialData = [
  
  {
    name: "Aryan Rana",
    profile: "https://www.linkedin.com/in/sudoaptrana2025/",
    content:
      "Before your lectures I struggled with recursion. Now I can think in a completely new way."
  },
  {
    name: "Shashank Yadav",
    profile: "https://www.linkedin.com/in/shashank-yadav-36b360239/",
    content:
      "Attended my first LeetCode contest today and solved 3 questions. Thanks to your amazing course!"
  },
  // ⭐ IMAGE TESTIMONIAL #1
 
  
  {
    name: "Avjit",
    profile: "https://www.linkedin.com/in/avijit-rana-3a57741bb/",
    content:
      "No one puts this much effort into students at this course price. Thanks sir, we will get great results."
  },
  {
    name: "Tanishq Singh Rathore",
    profile: "https://www.linkedin.com/in/tanishq-singh-rathore-825a03285/",
    content:
      "Your DP sessions are the best coding content I have ever seen."
  },
  // ⭐ IMAGE TESTIMONIAL #2

 
    {
    name: "Dec Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1766838966/WhatsApp_Image_2025-12-27_at_10.20.58_AM_ogsi1h.jpg" // Replace with actual image URL
  },

  
  {
    name: "Dec Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767509231/12_qkezvi.jpg" // Replace with actual image URL
  },
  {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767509232/13_wrmphy.jpg" // Replace with actual image URL
  },

    {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767509233/22_jzxzfn.jpg" // Replace with actual image URL
  },
    {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767509233/WhatsApp_Image_2025-12-06_at_23.33.36_11b834b9_xgrcxn.jpg" // Replace with actual image URL
  },
  {
    name: "Nishant",
    profile: "https://www.linkedin.com/in/nishant-rai-sde/",
    content:
      "Your hashing session with range update trick was next level. It made a very hard question so easy to visualize."
  },


 {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767618048/WhatsApp_Image_2026-01-05_at_3.10.30_PM_wshhhm.jpg" // Replace with actual image URL
  },
   {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767618048/WhatsApp_Image_2026-01-05_at_3.10.28_PM_tr9kui.jpg" // Replace with actual image URL
  },
   {
    name: "Dp Student",
    profile: "#",
    isImage: true,
    image: "https://res.cloudinary.com/derywmjpv/image/upload/v1767618048/WhatsApp_Image_2026-01-05_at_3.10.32_PM_o0frgw.jpg" // Replace with actual image URL
  },


  
 
  {
    name: "May Beginner Batch Student",
    profile: "#",
    content:
      "I finally completed Beginner Plan. Festivals slowed me, but I never stopped. After joining your program, my DSA logic improved massively. Your structured approach fixed my fundamentals."
  },
  {
    name: "Beginner Plan Student",
    profile: "#",
    content:
      "Sir, your teaching style is crystal clear. I now understand DP, Graphs, Trees easily. This is the best beginner plan in the world. No other course matches your quality."
  }
];

export default Testimonials;