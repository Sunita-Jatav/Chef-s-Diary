import React from 'react'

const Home = () => {

  return (
   
    <div className=" bg-[#0D0D0D] w-full h-screen bg-cover bg-center  p-10 relative">
      <h1 className='text-center mt-11 text-6xl font-medium tracking-tighter text-white drop-shadow-lg'>
        More than food,<br /> it’s a memory on a plate.
      </h1>

      <div className="w-[36rem] h-[10rem] bg-[#151718] bg-opacity-80
                top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                shadow-lg overflow-hidden rounded-xl p-4 relative">

 
  <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#151718] to-transparent pointer-events-none z-10"></div>

 
  <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#151718] to-transparent pointer-events-none z-10"></div>


  <div className="flex animate-marquee">
   
    <div className="flex">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
    </div>

  
    <div className="flex">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
      <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
    </div>
  </div>
  
</div>
     <p className='text-2xl text-white text-center mt-16 tracking-tighter'>
  Every recipe tells a story, share yours and relive the memories on a plate.
</p> 

</div>
    
  )
}

export default Home

