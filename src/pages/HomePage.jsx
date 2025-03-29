import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Components
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ResearchMethods from '../components/sections/ResearchMethods';
import SurveysSection from '../components/sections/SurveysSection';
import InterviewsSection from '../components/sections/InterviewsSection';
import DashboardSection from '../components/sections/DashboardSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero 
        title="Bridging the Skill Gap in Indian Education"
        subtitle="Help us create an accessible, personalized, and industry-aligned learning ecosystem for tier-2/3 cities"
        buttons={[
          { text: 'Take Survey', link: '/surveys', primary: true },
          { text: 'Join Interview', link: '/interviews', primary: false }
        ]}
      />
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="research">
        <ResearchMethods />
      </section>
      
      <section id="surveys">
        <SurveysSection />
      </section>
      
      <section id="interviews">
        <InterviewsSection />
      </section>
      
      <section id="dashboard">
        <DashboardSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;
