import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import ProjectsSlider from "./components/ProjectsSilder/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/certificate/Certificate";
import ResumeButton from "./components/ResumeButton/ResumeButton";
import Loading from "./components/loadingPage/loadingPage";
import CircleCursor from "./components/CursorAnimation/CircleCursor/CircleCursor";
import StarryMagicCursor from "./components/CursorAnimation/StarryMagicCursor/StarryMagicCursor";
import AnimatedCircles from "./components/BackRound/AnimatedCircles/AnimatedCircles";
import UserInfo from "./components/userInfo/userInfo";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHighPerformance, setIsHighPerformance] = useState(false);

  useEffect(() => {
    const onMouseMove = () => {
      // Do something with the mouse position if needed
    };

    const onContextMenu = (e) => {
      e.preventDefault(); // Prevent the default context menu
    };

    const onKeyDown = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 67)
      ) {
        // Disable Ctrl+Shift+I and Ctrl+Shift+C
        e.preventDefault();
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const checkDevicePerformance = async () => {
      // Enhanced logic to determine high-performance device
      const isFastConnection =
        navigator.connection &&
        (navigator.connection.saveData || navigator.connection.downlink >= 1.5);

      const isPowerfulCPU =
        navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency >= 4;

      const isSufficientRAM =
        navigator.deviceMemory && navigator.deviceMemory >= 4;

      const hasDedicatedGPU =
        navigator.userAgent &&
        (navigator.userAgent.includes("NVIDIA") ||
          navigator.userAgent.includes("AMD") ||
          navigator.userAgent.includes("Intel"));

      let isSufficientAvailableMemory = true;

      if (window.performance && window.performance.memory) {
        const { totalJSHeapSize } = window.performance.memory;
        isSufficientAvailableMemory = totalJSHeapSize >= 500000000; // 500 MB in bytes
      }

      const isHighPerformanceDevice =
        isFastConnection &&
        isPowerfulCPU &&
        isSufficientRAM &&
        hasDedicatedGPU &&
        isSufficientAvailableMemory;

      setIsHighPerformance(isHighPerformanceDevice);
    };

    checkDevicePerformance();

    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  // Check if the device is not a mobile or tablet
  const isDesktop = window.innerWidth >= 768; // You may need to adjust this threshold

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      { isDesktop && <StarryMagicCursor />}
      {isHighPerformance && isDesktop && <AnimatedCircles />}

      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        {isDesktop && <CircleCursor />}
        <ResumeButton />

        <Banner />
        <Features />
        <ProjectsSlider />

        <Resume />
        <Certificate />
        <Contact />
        {/* <Footer /> */}
        <UserInfo />
        <FooterBottom />
        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default App;
