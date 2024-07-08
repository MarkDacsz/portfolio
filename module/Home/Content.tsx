import React from 'react'
import Download from '@/components/Download'

const UpdateSection = () => {
  return (

    <div className="bg-black h-full">
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
        <div className="p-4 text-right">
          <h1 className="text-5xl py-2 pr-6 font-bold text-center text-white">John Chrismark B Dacsil</h1>
          <p className="text-2xl py-2 pr-6 text-white text-center italic">Bachelor of Science in Information Technology</p>
          <p className="text-2xl py-4 pr-6 text-justify indent-8 text-white ">I am an Information Technology graduate from Colegio De San Juan De Letran Calamba, 
            driven by a passion for continuous learning and skill development. 
            Here, you'll find a showcase of my projects, skills, and experiences that highlight my journey in the ever-evolving field of technology. 
            Whether you're here to explore my work or connect for potential opportunities, 
            I look forward to sharing my passion for IT with you.</p> 
            <Download/>
          </div>
  
        <div className=" bg-cover h-full min-h-96 object-contain bg-center bg-no-repeat bg-[url('/dacsil.png')] "></div>
        </div>
      </div>
    </div>
 
  

  )
}

export default UpdateSection