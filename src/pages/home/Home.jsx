import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ContactUs from './ContactUs';
import PopularPages from './PopularPages';

const Home = () => {

    // const products = useLoaderData();

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <Hero></Hero>
            <Features></Features>
            <PopularPages></PopularPages>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;