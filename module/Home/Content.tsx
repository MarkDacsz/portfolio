import React from 'react'
import Download from '@/components/Download'
import { Facebook, Instagram, LinkedinIcon } from 'lucide-react'

const Content = () => {
  return (
    <div className="bg-black h-full">
      <div className="flex-wrap container mx-auto p-4 h-max">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-3">
          <div className="p-4 text-right md:text-left lg:text-left xl:text-left">
            <h1 className="text-5xl py-2 pr-6 font-bold text-center text-white md:text-4xl lg:text-5xl xl:text-5xl">John Chrismark B Dacsil</h1>
            <p className="text-2xl py-2 pr-6 text-white text-center italic md:text-xl lg:text-2xl xl:text-2xl">Bachelor of Science in Information Technology</p>
            <p className="text-2xl py-4 pr-6 text-justify indent-8 text-white md:text-lg lg:text-2xl xl:text-2xl">
              I am an Information Technology graduate from Colegio De San Juan De Letran Calamba, 
              driven by a passion for continuous learning and skill development. 
              Here, you'll find a showcase of my projects, skills, and experiences that highlight my journey in the ever-evolving field of technology. 
              Whether you're here to explore my work or connect for potential opportunities, 
              I look forward to sharing my passion for IT with you.
            </p>


            <p className="text-2xl py-2 pr-6 text-white text-center">SOCIAL MEDIA LINKS:</p>
            <div className="grid grid-cols-3 md:grid-cols-3 ">
              <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/john-chrismark-dacsil-00b7a8316" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="text-white"/>
                </a>
              </div>
              <div className="flex justify-center">
                <a href="https://www.facebook.com/johnchrismark.dacsil/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="text-white"/>
                </a>
              </div>
              <div className="flex justify-center">
                <a href="https://www.instagram.com/knowitskey/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-white"/>
                </a>
              </div>
           </div>
            <div className="pt-8">
                <Download/>
            </div>
          

        </div>
          <div className="hidden md:block lg:block xl:block bg-cover h-full  object-contain bg-center bg-no-repeat bg-[url('/dacsil.png')] "></div>
        
           
        </div>
      </div>
    </div>
  )
}

export default Content