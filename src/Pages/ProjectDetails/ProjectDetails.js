import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData()
    const {name, morePhotos, features,livesite, github} = project[0]
    console.log(project)
    
    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <p className='text-3xl font-bold text-center mb-5'>{name}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    morePhotos.map((photo,i)=><img className='w-full h-60' src={photo} alt=''/>)
                }
            </div>
            <div className='mt-5'>
            <a className=' my-5 text-sm text-blue-400 text-center' href={livesite}>Livesite</a>
            <a className='ml-5 my-5 text-sm text-blue-400 text-center' href={github}>Github</a>
            </div>
            <div className='mt-4 '>
                <p className='text-xl font-bold'>Features: </p>
                {
                    features.map(item=><li className='font-semibold text-start'>{item}</li>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;