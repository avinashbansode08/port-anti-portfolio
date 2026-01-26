import React from 'react';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Contact />
        </main>
    );
};

export default Home;
