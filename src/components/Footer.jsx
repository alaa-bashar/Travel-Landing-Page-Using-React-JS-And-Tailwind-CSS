import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Logo = () => {
  return <h1>BEACHES.</h1>;
};

const SocialIcon = () => {
  return (
    <div className="flex w-full justify-between sm:max-w-[280px] my-4">
      <FaFacebook className="text-[#5651e5]" size={25} />
      <FaTwitter className="text-[#5651e5]" size={25} />
      <FaInstagram className="text-[#5651e5]" size={25} />
      <FaPinterest className="text-[#5651e5]" size={25} />
      <FaYoutube className="text-[#5651e5]" size={25} />
    </div>
  );
};

const FooterTabs = () => {
  return (
    <ul className="lg:flex">
      <li>About</li>
      <li>Partnerships</li>
      <li>Careers</li>
      <li>Newsroom</li>
      <li>Advertising</li>
    </ul>
  );
};

const MainTabs = () => {
  return (
    <ul className="text-right lg:flex">
      <li>Home</li>
      <li>Destinations</li>
      <li>Travel</li>
      <li>Views</li>
      <li>Books</li>
    </ul>
  );
};

const Tabs = () => {
  return (
    <div className="flex justify-between">
      <FooterTabs />
      <MainTabs />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <Logo />
          <SocialIcon />
        </div>
        <Tabs />
      </div>
    </footer>
  );
};

export default Footer;
