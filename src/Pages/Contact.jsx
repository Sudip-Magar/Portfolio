import React from 'react'
import contact from '../assets/Img/contact.png'

function Contact() {
    return (
        <div id='Contact' className='bg-bg1 border-t border-black text-gray-300 px-5 '>
            <div className="py-16">
                <p className='text-center uppercase text-colo1'>Contact</p>
                <h2 className='text-center text-myfont font-semibold'>Contact Me</h2>
                <div className='flex flex-col lg:flex-row gap-10 '>

                    <div className='w-full lg:w-w30 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 p-6 rounded-lg group'>
                        <div className='overflow-hidden rounded-lg'><img src={contact} className='rounded-lg group-hover:scale-110 duration-300 ' alt="" /></div>
                        <h3 className='text-3xl font-semibold my-5'>Sudip Magar</h3>
                        <p className='mb-5'>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p>Phone: <span>+977 9823205972</span></p>
                        <p className='mb-5'>Phone: <span>+977 9761834027</span></p>
                        <p>Email: <span>sudeepmagar730@gmail.com</span></p>

                        <div className='mt-6'>
                            <h3 className='uppercase text-base'>find me</h3>
                            <div className='grid grid-cols-3 my-4 mx-10 lg:mx-0'>
                                <a href='https://www.facebook.com/sp.sudeepmagar' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-b my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-facebook"></i>
                                </a>
                                <a href='https://github.com/Sudip-Magar' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-github"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/sudip-magar-406772239/' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-linkedin"></i>
                                </a>
                                <a href='https://www.tiktok.com/@uchiha_sasuke834?_t=8puN14T2u4l&_r=1' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-tiktok"></i>
                                </a>
                                <a href='https://www.instagram.com/sudeep_magar834/?hl=en' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-instagram"></i>
                                </a>
                                <a href='https://x.com/SudipMagar730' target='_blank' className=' shadow-cussha rounded-md w-16 h-16 flex justify-center items-center bg-gradient-to-br my-4 from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 duration-300 hover:-translate-y-2'>
                                    <i className="text-2xl fa-brands fa-twitter"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-w67 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 p-6 rounded-lg">
                        <form action="">
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="Name" className='mb-4 block text-sm'>YOUR NAME</label>
                                    <input type="text" name="name" className='w-full bg-bg2 shadow-lg outline-none p-3 rounded-lg' id="Name" />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="numb" className='mb-4 block text-sm'>YOUR NUMBER</label>
                                    <input type="number" name="phone" className='w-full bg-bg2 shadow-lg outline-none p-3 rounded-lg' id="numb" />
                                </div>
                            </div>

                            <div className='mt-10'>
                                <label htmlFor="EMAIL" className='mb-4 block text-sm'>EMAIL</label>
                                <input type="email" name="phone" className='w-full bg-bg2 shadow-lg outline-none p-3 rounded-lg' id="EMAIL" />
                            </div>

                            <div className='mt-10'>
                                <label htmlFor="subj" className='mb-4 block text-sm'>SUBJECT</label>
                                <input type="email" name="phone" className='w-full bg-bg2 shadow-lg outline-none p-3 rounded-lg' id="subj" />
                            </div>

                            <div className='mt-10'>
                                <label htmlFor="subj" className='mb-4 block text-sm'>YOUR MESSAGE</label>
                                <textarea name="" id="" cols="20" rows="8" className='w-full bg-bg2 shadow-lg outline-none p-3 rounded-lg'></textarea>
                            </div>
                            <div className='mt-10'>
                               <button className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 w-full py-3 hover:-translate-y-2 duration-300 hover:text-colo1'>SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
