import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ParticleText = dynamic(() => import("../miniCompo/ParticleTest"), { ssr: false });
const Countdown = dynamic(() => import("./CountDown"), { ssr: false });
const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex flex-col pb-4 items-center justify-center w-screen text-center px-4 sm:px-8 md:px-12">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r animate-[gradientAnimation_6s_infinite_alternate] opacity-90"
        style={{
          backgroundSize: "200% 200%",
          backgroundImage:
            "linear-gradient(90deg, hsla(100, 80%, 45%, 1) 0%, hsla(212, 82%, 50%, 1) 100%)",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center space-y-2 mt-2">
        {/* Title with Particle Effect */}
        <ParticleText />

        {/* Event Date (Uplifted) */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-1"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.4)" }}
        >
          February 16 - March 23, 2025
        </p>

        {/* Countdown Timer (Uplifted) */}
        <div className="flex justify-center items-center mt-1">
          <div className="relative z-20 backdrop-blur-lg bg-white/10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <Countdown />
          </div>
        </div>

        {/* Register Button - Now Smaller & Black */}
        <div className="mt-4 z-30">
          <a
            href="https://lu.ma/rm1ln6ks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base md:px-6 md:py-4 md:text-lg font-semibold text-white bg-black rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-md"
            >
              Register Now
            </button>
          </a>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;