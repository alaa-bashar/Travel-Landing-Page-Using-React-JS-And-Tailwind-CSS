import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { IoMenu, IoClose } from "react-icons/io5";

const Logo = () => {
  return (
    <div>
      <h1>BEACHES.</h1>
    </div>
  );
};

const Tabs = () => {
  return (
    <div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Books</li>
      </ul>
    </div>
  );
};

const Tailor = () => {
  return (
    <div className="hidden md:flex">
      <FaSearch className="nav-icon" />
      <GoPersonFill className="nav-icon" />
    </div>
  );
};

const MenuIcon = ({ isNavMenu, onIconClick }) => {
  return (
    <div onClick={onIconClick} className="md:hidden">
      {isNavMenu ? (
        <IoClose className="nav-icon" />
      ) : (
        <IoMenu className="nav-icon" />
      )}
    </div>
  );
};

const MenuItems = ({ isNavMenu }) => {
  return (
    <div
      className={
        isNavMenu
          ? "absolute left-0 top-20 w-full bg-gray-100/90 px-4 py-3 flex flex-col z-50 md:hidden"
          : "hidden"
      }
    >
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Books</li>
      </ul>
      <button>Search</button>
      <button>Account</button>
    </div>
  );
};

const Menu = ({ isNavMenu, onIconClick }) => {
  return (
    <>
      <MenuIcon isNavMenu={isNavMenu} onIconClick={onIconClick} />
      <MenuItems isNavMenu={isNavMenu} />
    </>
  );
};

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  function handleNavMenu() {
    setNavMenu(!navMenu);
  }

  return (
    <nav className={navMenu ? "bg-gray-100/90" : "text-white"}>
      <Logo />
      <Tabs />
      <Tailor />
      <Menu isNavMenu={navMenu} onIconClick={handleNavMenu} />
    </nav>
  );
};

export default Navbar;
