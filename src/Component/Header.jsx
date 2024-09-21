import React, { useState } from 'react';
import { Link } from 'react-scroll';
import img from '../assets/Img/img.jpg';

function Header() {
    const [bar, setBar] = useState(false);

    return (
        <div className=''>
            <div className='fixed top-3 right-3 text-3xl text-colo1 cursor-pointer xl:hidden ' onClick={() => setBar(!bar)}>
                {bar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
            <div className={`fixed top-0 left-0 xl:ms-0 w-72 h-screen duration-300 bg-bg1 text-white overflow-y-auto p-4 ${bar ? 'ms-0' : '-ms-96'}`}>
                <div className='text-center mt-5 '>
                    <img className='w-9/12 rounded-full inline-block border-mywidth border-mybord' src={img} alt="" />
                </div>

                <div className='mt-10 ms-5'>
                    <ul className='space-y-4 text-md uppercase font-light border-b pb-3'>
                        <li className='hover:text-colo1 duration-200'>
                            <Link to='Home' spy={true} smooth={true} offset={50} duration={500} activeClass="text-colo1" onClick={()=>setBar(false)} className="cursor-pointer">
                                <i className="fa-solid fa-house me-6"></i> Home
                            </Link>
                        </li>
                        <li className='hover:text-colo1 duration-200'>
                            <Link to='Feature' spy={true} smooth={true} offset={50} duration={500} activeClass="text-colo1" onClick={()=>setBar(false)} className="cursor-pointer">
                                <i className="fa-solid fa-suitcase me-6"></i> Feature
                            </Link>
                        </li>
                        <li className='hover:text-colo1 duration-200'>
                            <Link to='Resume' spy={true} smooth={true} offset={50} duration={500} activeClass="text-colo1" onClick={()=>setBar(false)} className="cursor-pointer">
                                <i className="fa-solid fa-user-group me-6"></i> Resume
                            </Link>
                        </li>
                        <li className='hover:text-colo1 duration-200'>
                            <Link to='Project' spy={true} smooth={true} offset={50} duration={500} activeClass="text-colo1" onClick={()=>setBar(false)} className="cursor-pointer">
                                <i className="fas fa-project-diagram me-6"></i> Project
                            </Link>
                        </li>
                        <li className='hover:text-colo1 duration-200'>
                            <Link to='Contact' spy={true} smooth={true} offset={50} duration={500} activeClass="text-colo1" onClick={()=>setBar(false)} className="cursor-pointer">
                                <i className="fa-solid fa-comment me-6"></i> Contact
                            </Link>
                        </li>
                    </ul>

                    <div className='mt-6'>
                            <h3 className='uppercase text-base'>find me</h3>
                            <div className='grid grid-cols-3 my-4'>
                                <a href='https://www.facebook.com/sp.sudeepmagar' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-b my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-facebook"></i>
                                </a>
                                <a href='https://github.com/Sudip-Magar' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-github"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/sudip-magar-406772239/' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-linkedin"></i>
                                </a>
                                <a href='https://www.tiktok.com/@uchiha_sasuke834?_t=8puN14T2u4l&_r=1' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-tiktok"></i>
                                </a>
                                <a href='https://www.instagram.com/sudeep_magar834/?hl=en' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-instagram"></i>
                                </a>
                                <a href='https://x.com/SudipMagar730' target='_blank' className='shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-twitter"></i>
                                </a>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
