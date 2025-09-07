import React from 'react'

const Home = () => {

  return (
   
    <div className=" bg-[#0D0D0D] w-full h-screen text-center p-8 relative flex flex-col items-center justify-center gap-[3rem]">
      <h1 className='sm:text-6xl text-5xl font-medium tracking-tighter text-white drop-shadow-lg '>
        More than food,<br /> it’s a memory on a plate.
      </h1>

      <div className=" w-full sm:w-[36rem] sm:h-[10rem] h-[8rem] bg-[#151718] bg-opacity-80
                shadow-lg overflow-hidden rounded-xl p-4 relative">

  <div className="flex animate-marquee items-center justify-center">
   
    <div className="flex">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
    </div>

  
    <div className="flex">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="sm:h-[8rem] sm:w-[8rem] w-[4rem] mx-2 rounded-lg object-cover" />
    </div>
  </div>
  
      </div>

     <p className=' text-2xl text-white tracking-tighter'>
     Every recipe tells a story, share yours and relive the memories on a plate.
     </p> 

</div>
    
  )
}

export default Home

