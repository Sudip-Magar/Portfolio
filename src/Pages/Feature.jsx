import React from 'react'
import Data from '../assets/Data/Data'

function Feature() {
    return (
        <div id='Feature' className='bg-bg1 border-t border-black text-gray-300'>
            <div>
                <div className='text-center py-16'>
                    <p className='uppercase text-colo1 '>feature</p>
                    <h2 className='text-myfont font-semibold '>What I Do</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2'>
                        {Data.map((item) => (
                            <div className='shadow-cussha bg-gradient-to-br from-gra2 to-gra1 p-4 mx-3 my-3 hover:from-gra1 hover:to-gra2' key={item.id}>
                                <div className='hover:-translate-y-3 duration-200'>
                                    <h3 className='text-2xl my-2 font-semibold'>{item.title}</h3>
                                    <p className='mt-5'>{item.discription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
