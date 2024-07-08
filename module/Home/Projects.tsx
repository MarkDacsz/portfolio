"use client"

import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

  
  const divStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover', 
  height: '245px',
  width: '100%' // add this to make the image fit the container
  }
  const slideImages = [
    {
      url: 'SLIDE2.png',
    },
    {
      url: 'SLIDE3.png',
    },
    {
      url: 'SLIDE4.png',
    },
    {
      url: 'SLIDE5.png',
    },
  ];


const Projects = () => {
  return (
  <div className="bg-black h-full p-8"> 
      <div className="flex-wrap container mx-auto p-4">
        <div className="p-8 text-left text-white ">
          <h1 className="text-5xl pr-6 font-bold text-gray pb-4">Sample Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-3">

            <div className="rounded-lg p-4 border-zinc-100 border">
                <video className=" rounded-lg" controls>
                  <source src="/SIGNTALK.mp4" type="video/mp4" />
                </video>
                    <p className="text-white text-left text-xl text-wrap pt-10">SignTalk (Prototype)</p>
                    <p className="text-white text-left text-3xl font-bold pt-4">School Final Research </p>
                    <p className="text-white text-xl text-wrap pt-10 ">Mobile Application that can detect sign languages and can input text then covert into sign language. Using Python, Android Studio (Java) and Pre-trained datasets.</p>
            </div>
 
        <div className=" rounded-lg p-4 border-zinc-100 border">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div  key={index}>
                    <div className=" rounded-lg bg-no-repeat bg-center object-cover" style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
                ))} 
                </Slide>
            
                    <p className="text-white text-left text-xl text-wrap pt-10">OJT Website Development</p>
                    <p className="text-white text-left text-3xl font-bold pt-4">Pakil, Laguna Website (Not yet Published)</p>
                    <p className="text-white text-xl text-wrap pt-10 ">The Website created using ReactJS, Java, TailwindCss, and MongoDB.</p>
        </div>

            <div className="rounded-lg p-4  border-zinc-100 border">
            <video className="rounded-lg" controls>
                <source src="/Appdev (1).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <p className="text-white text-left text-xl text-wrap pt-10">Letran Website (Online Payment System)</p>
                    <p className="text-white text-left text-3xl font-bold pt-4">School Final Project </p>
                    <p className="text-white text-xl text-wrap pt-10 ">The website created using HTML, CSS, PHP / MySQL, and Bootstrap.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects