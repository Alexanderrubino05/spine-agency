import React, { useEffect } from 'react'
import LandingSection from "../HomePage/Sections/LandingSection.jsx";
import { AboutSection } from "../HomePage/Sections/AboutSection.jsx";
import { ServicesSection } from "../HomePage/Sections/ServicesSection.jsx";
import { StartupsSection } from "../HomePage/Sections/StartupsSection.jsx";
import { ProjectsSection } from "../HomePage/Sections/ProjectsSection.jsx";
import { ProgressSection } from "../HomePage/Sections/ProgressSection.jsx";
import { ContactSection } from "../HomePage/Sections/ContactSection.jsx";
import transition from "../transition.jsx";
import { useLocation } from 'react-router-dom';
import * as Scroll from "react-scroll";

const OverallDiv = () => {
  const location = useLocation();
  const sectionId = location.state?.sectionId

  useEffect(() => {
    window.history.replaceState({}, document.title)

    if (sectionId) {
      Scroll.scroller.scrollTo(sectionId, {
        duration: 500,
        offset: -50,
        smooth: true,
      });
    }
  }, [sectionId])

  return (
    <>
      <div id="overall-div">
        <LandingSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <StartupsSection />
        <ProgressSection />
        <ContactSection />
      </div>
    </>
  )
}

export default transition(OverallDiv);