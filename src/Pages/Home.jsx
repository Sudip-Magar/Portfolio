import React from 'react'
import img1 from '../assets/Img/img1.jpg'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { Link } from 'react-scroll';

function Home() {
    const [text]=useTypewriter({
        words:['Front-End Developer.'],
        loop:{}
    });
  return (
    <div id='Home' className='bg-bg1 w-full px-5'>
      <div className='text-center pt-20'>
        <img className='w-1/4 rounded-full inline-block border-mywidth border-rose-700' src={img1} alt="" />
        <h1 className='text-myfont font-bold text-gray-300'>Hi, I'm Sudip Magar</h1>
        <p className='text-3xl text-gray-300'>I am a <span className='text-colo1'> {text}</span> <Cursor/></p>
        <Link className='text-colo1 cursor-pointer  bg-gradient-to-br from-gra2 to-gra1 py-4 px-8 text-xl inline-block shadow-cussha mt-10 mb-12 hover:from-gra1 hover:to-gra2 hover:-translate-y-2 duration-300'> Contact</Link>
      </div>
    </div>
  )
}

export default Home
