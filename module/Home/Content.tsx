import React from 'react'
import { ChevronRight } from 'lucide-react'

const UpdateSection = () => {
  return (

    <div className="bg-zinc-900 h-screen">

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
        <div className="p-4 text-right">
          <h1 className="text-5xl py-2 font-bold text-white">John Chrismark B Dacsil</h1>
          <p className="text-2xl py-2 text-white italic">Bachelor of Science in Information Technology</p>
          <p className="text-2xl py-4 pl-4 text-justify indent-8 text-white ">I am an Information Technology graduate from Colegio De San Juan De Letran Calamba, driven by a passion for continuous learning and skill development. Here, you'll find a showcase of my projects, skills, and experiences that highlight my journey in the ever-evolving field of technology. Whether you're here to explore my work or connect for potential opportunities, I look forward to sharing my passion for IT with you.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
        </div>
  
        <div className="bg-cover w-full object-contain bg-center bg-no-repeat p-4 bg-[url('/dacsil.png')] h-screen"></div>
  
      </div>
    </div>
  
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
      <i className="fas fa-chevron-down text-3xl text-white animate-bounce"></i>
    </div>
  
  </div>

  )
}

export default UpdateSection