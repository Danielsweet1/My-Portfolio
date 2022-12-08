import FileSaver from 'file-saver';
import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Skills from './Skills/Skills';

const Home = () => {

    return (
        <div className='bg-base-200'>
            <Banner />
            <About/>
            <Skills/>
            <MyPortfolio/>
            <ContactMe/>
            <Footer/>
        </div>
    );
};

export default Home;