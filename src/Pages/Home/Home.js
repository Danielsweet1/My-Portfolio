import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner/>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;