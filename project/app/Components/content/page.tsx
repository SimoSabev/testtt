"use client"
import React, { useEffect, useRef } from "react";


const Content = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      // Check if backgroundRef.current is not null before accessing it
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPositionY = `${-yPos * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="hero min-h-screen relative"
      ref={backgroundRef}
      style={{
        backgroundImage:
          "url(https://images.musement.com/cover/0002/04/varna-city-jpg_header-103259.jpeg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="text-8xl font-black">Varna Journey</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
