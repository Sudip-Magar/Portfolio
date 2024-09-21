import React from 'react'
import { project } from '../assets/Data/Data'
function Project() {
    return (
        <div id='Project' className='bg-bg1 border-t border-black text-gray-300 px-5 '>
            <div className='py-16'>
                <p className='text-center uppercase text-colo1'>Visit my project and keep your feedback</p>
                <h2 className='text-center text-myfont font-semibold'>My Project</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 '>
                    {project.map((item) => (
                        <div key={item.id} className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 p-4'>
                            <img src={item.img} alt="" className='border-b border-black pb-4' />
                            <div className=' text-justify py-4'>
                                <h3 className='text-xl pb-3'>{item.title}</h3>
                                <a className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 py-2 px-4 inline-block mt-3  hover:from-gra1 hover:to-gra2 hover:-translate-y-2 duration-300 hover:text-colo1' href={item.url} target='_blank'>Live demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
