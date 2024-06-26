import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = (event: any) => {
    event.stopPropagation(); // Prevent triggering the document's click listener
    setNav(!nav);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (nav) {
        setNav(false);
      }
    };

    // Add click listener to the document
    document.addEventListener('click', closeMenu);

    // Prevent menu clicks from closing the menu
    const menu = document.querySelector('.menu');
    menu?.addEventListener('click', (event) => event.stopPropagation());

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', closeMenu);
      menu?.removeEventListener('click', (event) => event.stopPropagation());
    };
  }, [nav]); // Dependency on nav to ensure the effect runs when nav changes

  return (
    <div className="flex justify-evenly lg:justify-around items-center h-16 shadow-sm text-text-light">
      <div className="pl-2 lg:pl-4">
        <h2 className="text-lg lg:text-4xl hidden sm:block font-bold text-[#00df9a]">
          <a href="/">Kemboi</a>
        </h2>
      </div>
      <div className="text-lg lg:font-bold sm:font-medium hidden md:block">
        <a href="#home" className="p-2 lg:p-4">Home</a>
        <a href="#education" className="p-2 lg:p-4">Education</a>
        <a href="#experience" className="p-2 lg:p-4">Experience</a>
        <a href="#projects" className="p-2 lg:p-4">Projects</a>
        <a href="#community" className="p-2 lg:p-4">Community</a>
        <a href="#contact" className="p-2 lg:p-4">Contact</a>
      </div>

      {/* Hamburger menu */}
      <div onClick={handleNav} className="block md:hidden absolute right-0 top-0 p-4 cursor-pointer z-50">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* For small screens */}
      <div
        className={`menu fixed left-0 top-0 w-[60%] h-screen border-r border-gray-900 bg-[#000300] ease-in-out duration-500 z-40 ${nav ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <h2 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <a href="/">Kemboi</a>
        </h2>
        <div className="flex flex-col h-full text-lg font-bold">
          <a href="#" className="p-4 border-b border-gray-600">Home</a>
          <a href="#education" className="p-4 border-b border-gray-600">Education</a>
          <a href="#experience" className="p-4 border-b border-gray-600">Experience</a>
          <a href="#projects" className="p-4 border-b border-gray-600">Projects</a>
          <a href="#community" className="p-4 border-b border-gray-600">Community</a>
          <a href="#contact" className="p-4 border-b border-gray-600">Contact</a>
        </div>
      </div>
    </div>
  );
};

