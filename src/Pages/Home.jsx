import React from 'react'
import axios  from '../utils/axios'
const Home = () => {
    const connection = async ()=>{
        try {
          const axiosConn = await axios.get('/products');
          console.log(axiosConn.data)
        } catch (error) {
          console.log(error)
        }
  
      }
  return (

    
     <div>
      <h1>hello</h1>
      <button onClick={connection}>get product</button>
     </div>


   
//     <div className="bg-[url('/mainImg.webp')] w-full h-screen bg-cover bg-center relative p-10 relative">
//       <h1 className='text-center mt-11 text-6xl font-medium tracking-tighter text-white drop-shadow-lg'>
//         More than food,<br /> it’s a memory on a plate.
//       </h1>

//       <div className="w-[36rem] h-[10rem] bg-[#151718] bg-opacity-80 absolute 
//                 top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                 shadow-lg overflow-hidden rounded-xl p-4 relative">

//   {/* Left gradient mask */}
//   <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#151718] to-transparent pointer-events-none z-10"></div>

//   {/* Right gradient mask */}
//   <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#151718] to-transparent pointer-events-none z-10"></div>

//   {/* Marquee container */}
//   <div className="flex animate-marquee">
//     {/* First set of images */}
//     <div className="flex">
//       <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//     </div>

//     {/* Second identical set */}
//     <div className="flex">
//       <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop" alt="food1" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop" alt="food2" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop" alt="food3" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//       <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=465&auto=format&fit=crop" alt="food4" className="h-[8rem] w-[8rem] mx-2 rounded-lg object-cover" />
//     </div>
//   </div>
  
// </div>
//      <p className='text-2xl text-white text-center mt-16 tracking-tighter'>
//   Every recipe tells a story, share yours and relive the memories on a plate.
// </p>


    


    
  )
}

export default Home

