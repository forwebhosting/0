import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/certificate/Certificate";
// import Testimonial from "./components/tesimonial/Testimonial";
// import BouncyBlockClock from "./components/clock/BouncyBlockClock";
import ResumeButton from "./components/ResumeButton/ResumeButton";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <ResumeButton />
        <Banner />
        <Features />
        <Resume />
        <Projects />
        
        <Certificate />
        {/* <Testimonial /> */}
        <Contact />
        <Footer /> 
        {/* <BouncyBlockClock /> */}
       
        <FooterBottom />
        
        
      </div>
    </div>
  );
}

export default App;
