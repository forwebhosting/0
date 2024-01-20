import React, { useState, useEffect } from 'react';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import ProjectsSlider from "./components/ProjectsSilder/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/certificate/Certificate";
import ResumeButton from "./components/ResumeButton/ResumeButton";
import Loading from './components/loadingPage/loadingPage'; 
import CustomCursor from './CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onMouseMove = () => {
      // Do something with the mouse position if needed
    };

    const onContextMenu = (e) => {
      e.preventDefault(); // Prevent the default context menu
    };

    const onKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
        // Disable Ctrl+Shift+I and Ctrl+Shift+C
        e.preventDefault();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('contextmenu', onContextMenu);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('contextmenu', onContextMenu);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []); 

  useEffect(() => {
    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <CustomCursor />
        <ResumeButton />
        <Banner />
        <Features />
        <ProjectsSlider />
        <Resume />
        <Certificate />
        <Contact />
        <Footer /> 
        <FooterBottom />
        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default App;
