import React from 'react'
import AboutHero from '../components/aboutHero'
import AboutSection from '../components/aboutSections';
import AboutPopularProduct from '../components/aboutPopularProducts';
import About from "@/app/About/page"

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            <About />
            
      </div>
    );
}

export default page