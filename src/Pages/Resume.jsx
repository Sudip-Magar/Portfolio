import React, { useState } from 'react'

function Resume() {
    const [show, setShow] = useState(false)
    return (
        <div id='Resume' className='bg-bg1 border-t border-black text-gray-300 px-5'>
            <div className='py-16'>
                <p className='text-center uppercase text-colo1'>Pixels to Perfection</p>
                <h2 className='text-center text-myfont font-semibold '>My Resume</h2>

                <div className='flex flex-col md:flex-row mt-6'>
                    <button className={`shadow-cussha  bg-gradient-to-br from-bg2 to-bg2 hover:from-gra2 hover:to-gra1 p-4 w-full lg:w-1/2 duration-300  hover:text-colo1 text-xl font-semibold ${show ? '' : 'bg-gradient-to-br from-gra2 to-gra1 text-colo1'}`} onClick={() => setShow(false)}>Education</button>
                    <button className={`shadow-cussha bg-gradient-to-br from-bg2 to-bg2 hover:from-gra2 hover:to-gra1 p-4 w-full lg:w-1/2 duration-300  hover:text-colo1 text-xl font-semibold ${show ? 'bg-gradient-to-br from-gra2 to-gra1 text-colo1' : ''}`} onClick={() => setShow(true)}>Skills</button>
                </div>

                <div className={`my-10 flex flex-col md:flex-row gap-8 ${show ? 'hidden' : 'block'}`}>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl ms-2 mb-3 text-colo1'>Academic Background</h3>
                        <div className='mb-10 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 hover:text-white p-10'>
                            <h2 className='text-2xl font-semibold my-4'>Bachelor in Computer Science</h2>
                            <p className='border-b pb-2 text-base'>Milton International College (2021 - Current)</p>
                            <p className='pt-3'>I am studying BCA at Tribhuvan University to develop my career in IT, focusing on front-end development. This program is strengthening my skills in HTML, CSS, and JavaScript, while providing practical experience in creating responsive and user-friendly web applications</p>
                        </div>

                        <div className='my-10 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 hover:text-white p-5'>
                            <div className='flex items-center border-b'>
                                <div className=' w-3/4 '>
                                    <h2 className='text-2xl font-semibold my-4'>+2 in Computer Science</h2>
                                    <p className='text-base  pb-2'>Texas International College (2019-2021)</p>
                                </div>
                                <div className='w-1/4'><p className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 inline-block p-3 text-colo1'>GPA: 3.25</p></div>
                            </div>
                            <p className='pt-3'>I studied Computer Science in my +2 education to develop my career in IT. This program is strengthening my skills in HTML, CSS, JavaScript, and C programming, providing practical experience in creating responsive and user-friendly web applications.</p>
                        </div>

                        <div className='my-10 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 hover:text-white p-5'>
                            <div className='flex items-center border-b'>
                                <div className=' w-3/4'>
                                    <h2 className='text-2xl font-semibold my-4'>Secondary School Education</h2>
                                    <p className='text-base  pb-2'>World Youth International School <br /> (2019)</p>
                                </div>
                                <p className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 inline-block p-3 text-colo1'>GPA: 3.60</p>
                            </div>
                            <p className='pt-3'>I completed my secondary education, where I developed a strong foundation in key subjects and essential skills that prepared me for further studies in Computer Science.</p>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl ms-2 mb-3 text-colo1'>Additional Training</h3>
                        <div className='mb-10 shadow-cussha bg-gradient-to-br from-gra2 to-gra1 hover:from-gra1 hover:to-gra2 hover:text-white p-10'>
                            <h2 className='text-2xl font-semibold my-4'>Web Designing</h2>
                            <p className='border-b pb-2 text-base'>Broadway Infosys (3 Month)</p>
                            <p className='pt-3'>Completed a 3-month web designing course at Broadway Infosys, where I developed skills in design principles and tools to create user-friendly websites and gained practical experience in responsive design.</p>
                        </div>
                    </div>
                </div>

                <div className={`my-10 flex flex-col lg:flex-row gap-8 ${show ? 'block' : 'hidden'}`}>

                    <div className='w-full lg:w-1/2'>
                        <div>
                            <h3 className='text-2xl ms-2 mb-3 text-colo1'>Designing Skills</h3>

                            <div className='my-4'>
                                <div className='flex justify-between items-center my-1'>
                                    <p>Photoshop</p>
                                    <p>50%</p>
                                </div>
                                <div className='w-full h-2 bg-black rounded-full'>
                                    <div className='h-full w-1/2 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='flex justify-between items-center my-1'>
                                    <p>Figma</p>
                                    <p>80%</p>
                                </div>
                                <div className='w-full h-2 bg-black rounded-full'>
                                    <div className='h-full w-4/5 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='flex justify-between items-center my-1'>
                                    <p>Canva</p>
                                    <p>75%</p>
                                </div>
                                <div className='w-full h-2 bg-black rounded-full'>
                                    <div className='h-full w-3/4 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='flex justify-between items-center my-1'>
                                    <p>Adobe Illustrator</p>
                                    <p>30%</p>
                                </div>
                                <div className='w-full h-2 bg-black rounded-full'>
                                    <div className='h-full w-mywidth bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-2xl ms-2 mb-3 text-colo1'>Development Skills</h3>
                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>HTML</p>
                                <p>98%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-w95 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>CSS</p>
                                <p>96%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-w96 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-w85 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>React Js</p>
                                <p>75%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-3/4 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>Bootstrap</p>
                                <p>82%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-w82 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>Tailwindcss</p>
                                <p>80%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-4/5 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p>JQuery</p>
                                <p>75%</p>
                            </div>
                            <div className='w-full h-2 bg-black rounded-full'>
                                <div className='h-full w-3/4 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                            </div>
                        </div>

                        <div className='my-4'>
                                <div className='flex justify-between items-center my-1'>
                                    <p>Git & Github</p>
                                    <p>80%</p>
                                </div>
                                <div className='w-full h-2 bg-black rounded-full'>
                                    <div className='h-full w-4/5 bg-gradient-to-r from-violet-900 to-pink-500 rounded-full'></div>
                                </div>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Resume
