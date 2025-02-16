"use client";

import React, { useMemo } from "react";

const ParticleText = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="relative group">
      {/* Animated Title */}
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white text-center">
          <span className="text-blue-800 [-webkit-text-stroke:1px_blue]">
            SKEPSIS
          </span>{" "}
          x{" "}
          <span className="text-green-700 [-webkit-text-stroke:1px_green]">
            GFG
          </span>
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl text-white font-extrabold">
          Event
        </h2>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute bg-white rounded-full opacity-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `particle-float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.7))",
            }}
          />
        ))}
      </div>

      {/* Particle Animation */}
      <style jsx>{`
        @keyframes particle-float {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.8) rotate(0deg);
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(
                calc(${Math.random() * 6 - 3} * 50px),
                calc(${Math.random() * 6 - 3} * 50px)
              )
              scale(0.5) rotate(${Math.random() * 360}deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleText;
