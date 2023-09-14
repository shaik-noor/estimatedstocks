import React from 'react';
import bgimage from '../../assets/bg-1.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div id="home" className="w-full h-[100vh] relative hero-image-container">
            <img
                className="w-full h-full object-cover animation-scaled" 
                src={bgimage} alt="hero"
            />
            <div className="max-w-[1200px] mx-auto absolute top-[40%] left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] text-white text-center">
            <h1 className="font-bold text-4xl sm:text-4xl md:text-5xl md:leading-relaxed">
            Fostering Prosperity for Individuals and Communities through Resilient and Ethical Enterprise
            </h1>
                <div className="flex justify-center items-center">
                    <h2 className="font-bold italic text-sm sm:text-xl md:text-2xl lg:text-3xl pt-5" style={{ borderBottom: '4px solid white', width: "20%" }}>
                        Our Mission
                    </h2>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default HeroSection;
