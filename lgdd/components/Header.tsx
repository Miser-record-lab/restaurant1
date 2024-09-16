'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing both menu and close icons
import MagicButton from './ui/MagicButton';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-black absolute top-5 left-1/2 transform -translate-x-1/2 w-[70vw] sm:w-auto sm:left-5 sm:transform-none sm:translate-x-0 px-6 py-2 rounded-lg border-slate-600 border-[0.5px] z-10 overflow-hidden items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/background.png)',
            opacity: 0.5,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <nav className="relative flex space-x-6 text-white text-lg font-semibold items-center z-10 justify-between">
          {/* Menu Icon */}
          <button onClick={toggleMenu} className="text-white z-20 focus:outline-none border-slate-600 border-[0.5px] rounded-lg p-1">
            <FiMenu size={24} />
          </button>

          {/* Logo Section */}
          <Link href="/" className="flex items-center z-20">
            <img 
              src="/lgdd.svg" 
              alt="Logo" 
              className="h-8 text-white" // Adjust height as needed
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6"> {/* Hidden on small screens, visible on large screens */}
            <Link href="/menu" className="hover:text-gray-300">
              Menu
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>

          {/* Magic Button */}
          <Link href="/reservation" className="hover:text-gray-300 whitespace-nowrap ml-auto">
            <MagicButton
              title="Book a table"
              otherClasses='!bg-[#161a31] whitespace-nowrap'
            />
          </Link>
        </nav>
      </header>

      {/* Pop-up Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-2">
        {/* Close Button */}
        <div className="relative p-2 border border-slate-500 rounded-2xl w-full h-full flex justify-center items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-5 left-5 text-white focus:outline-none border-slate-600 border-[0.5px] rounded-lg p-1"
          >
            <FiX size={24} />
          </button>
      
          {/* Pop-up Navigation Links */}
          <div className="text-center space-y-4 text-white text-3xl sm:text-6xl sm:text-auto flex flex-col items-center">
            <div className="flex justify-center">
                <Image 
                src="/line_diamond.svg" 
                alt="Line with diamonds" 
                width={200} 
                height={10} 
                className="mb-4"
                layout="intrinsic" // or "fixed"
                />
            </div>
            <Link href="/menu" onClick={toggleMenu} className="hover:text-gray-300">
                Menu
            </Link>
            <Link href="/reservation" onClick={toggleMenu} className="hover:text-gray-300">
                Reservation
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-gray-300">
                About
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-gray-300">
                Contact
            </Link>
            <div className="flex justify-center">
                <Image 
                src="/line_diamond.svg" 
                alt="Line with diamonds" 
                width={200} 
                height={10} 
                className="mt-4"
                layout="intrinsic" // or "fixed"
                />
            </div>     
</div>

        </div>
      </div>
      
      )}
    </>
  );
}
