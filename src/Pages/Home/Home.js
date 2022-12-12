import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Skills from './Skills/Skills';

const Home = () => {
    

    return (
        <div className='bg-base-200'>
            <Banner />
            <About/>
            <MyPortfolio/>
            <Skills/>
            <ContactMe/>
        </div>
    );
};

export default Home;