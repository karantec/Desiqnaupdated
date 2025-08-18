import { Link } from "react-router-dom";

function Feature({ p, h1, company, details, student, img,video }) {
  return (
    <>
      <div >
      <section className="mx-auto mb-2 max-w-screen-lg px-5 py-10 md:py-24">
        <section className="text-gray-600 body-font">
          <h1 className="text-center font-bold text-gray-700 font-sans text-4xl mb-8 uppercase top-perfor">Our RECENT  Month RESULT</h1>
          <div className={`flex flex-col md:flex-row items-center justify-center gap-[7rem] border-2 border-gray-300 rounded-lg shadow-md  p-6 pic_gap`}>
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center ">
              <span className="text-3xl text-red-600 font-sans font-bold mb-4">
                {p}
              </span>
              <h1 className="title-font mt-2 md:mt-0 sm:text-4xl lg:text-2xl mb-4 font-bold text-gray-900 text-center md:text-left">
                {h1}
              </h1>
              <p className="mb-4 leading-relaxed text-black text-center md:text-left">
                {details}
              </p>
              <div className="flex gap-10 mt-3 justify-center md:justify-start">
                <h1 className="text-xl text-black rounded-md p-3 font-bold">
                 <Link to ={video}>  {student}</Link> 
                </h1>
                
             
                <img src={company} 
                width={160}
                alt="img" 
                height={70} 
                className="text-xl text-white  rounded-md p-3 font-bold flex items-center justify-center">
              
                </img>
              </div>
              
            </div>
            <div className="md:w-1/2 mt-3 flex justify-center items-center  md:justify-center">
              <img
                className="object-cover object-center rounded-lg  shadow-[0px_22px_300px_10px_#f56565,19px_3px_72px_13px_#e2e8f0] "
                width={400} height={400}
                alt="hero"
                src={img}
              />
            </div>
          </div>
        </section>
      </section>
      </div>
    </>
  );
}

export default Feature;
