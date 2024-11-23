
function LowerFooter() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">

    <div className='flex flex-col pb-10 items-center justify-center bg-gradient-to-tr from-slate-500 to-slate-800 rounded-md lg:w-[70rem] w-[30rem]  lg:p-5 px-[5rem] py-[2rem] mt-[10rem]'>
        <div className='flex flex-col items-center gap-8'>
      <hr/>
        <h1 className='text-4xl font-bold text-center text-white'>Unlock Your Potential with</h1>
        <h1 className='text-4xl font-bold text-center  text-red-600 uppercase'>DesiQNA</h1>
        <p className='text-center pl-8 pr-8 text-gray-300 font-bold'>
          
          "When you join DesiQNA, you gain access to a wealth of resources and support that are meticulously crafted to align with your career aspirations. Our seasoned industry professionals, with years of experience across various domains, are dedicated to helping you unlock your full potential.!"</p>
        <a aria-label="class" href="https://wa.me/918879355057">
        <button role="button"  className="text-red hover:before:bg-red border-2  rounded-lg 
                       border-orange-500  relative h-12 w-40 
                       overflow-hidden bg-white px-3 text-red-500
                       shadow-2xl transition-all before:absolute 
                       before:bottom-0 before:left-0 before:top-0
                       before:z-0 before:h-full before:w-0 
                       before:bg-orange-500 before:transition-all 
                       before:duration-500 hover:text-white 
                       hover:shadow-orange-500 hover:before:left-0 
                       hover:before:w-full">
                   <span className="relative z-10 text-2xl">View More</span>
        </button></a>
        </div>
    </div>
    </div>
    </>
  )
}

export default LowerFooter