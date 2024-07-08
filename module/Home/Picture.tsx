"use client"

import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

  
  const divStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover', 
  height: '750px',
  width: '100%' // add this to make the image fit the container
  }
  const slideImages = [
    {
      url: 'Dog.png',
    },
    {
      url: 'coach.png',
    },
    {
      url: 'SCSTShirt.png',
    },
    {
      url: 'clientshirt.jpg',
    },
  ];
const Picture = () => {
  return (
    <div className="bg-black h-full"> 
      <div className="flex-wrap container mx-auto p-4">
        <div className="p-8 text-left text-white ">
          <h1 className="text-5xl font-bold text-gray pb-3">Freelance Portfolio</h1>
          <p className="text-white text-xl text-wrap pt-10 ">Here are some sample works from my client:</p>

            
        <div className=" rounded-lg p-4 h-full">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div  key={index}>
                    <div className=" rounded-lg bg-no-repeat bg-center " style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
                ))} 
                </Slide>
                <p className="text-white text-xl text-wrap pt-10 ">and many more...</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Picture