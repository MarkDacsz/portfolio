import React from 'react'
import  Content  from '@/module/Home/Content';
import Experience from './Experience';
import Projects from './Projects';
import Picture from './Picture';
import Information from './Information';

const Home = () => {
  return (
    <>
    <Content/>
    <Information/>
    <Experience/>
    <Projects/>
    <Picture/>
    </>
  )
}

export default Home