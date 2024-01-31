import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { FaSearch } from "react-icons/fa";

const BackgroundVideo = () => {
  return (
    <video
      className="w-full h-full object-cover"
      src={beachVid}
      autoPlay
      loop
      muted
    />
  );
};

const Overlay = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
  );
};

const TextHeroContent = () => {
  return (
    <div className="text-white">
      <h1>First Class Travel</h1>
      <h2 className="py-4">Top 1% Locations Worldwide</h2>
    </div>
  );
};

const SearchHeroContent = () => {
  return (
    <form className="flex justify-between items-center w-[350px] sm:w-[600px] md:w-[700px] mx-auto border p-1 rounded-md text-black bg-gray-100/90">
      <div className="w-full h-full">
        <input
          type="text"
          placeholder="Search Destination"
          className="w-full h-full bg-transparent outline-none ml-1"
        />
      </div>
      <div>
        <button className="mt-0">
          <FaSearch className="nav-icon" />
        </button>
      </div>
    </form>
  );
};

const HeroContent = () => {
  return (
    <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center">
      <TextHeroContent />
      <SearchHeroContent />
    </div>
  );
};

const Hero = () => {
  return (
    <header className="w-full h-screen relative">
      <BackgroundVideo />
      <Overlay />
      <HeroContent />
    </header>
  );
};

export default Hero;
