import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#07004D] text-white">
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <span className="text-white">built</span>
          <div className="border border-blue-500 h-6 w-6 border-r-0 border-t-0"></div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-xl hover:opacity-75">🔍</button>
          
          {/* For Employers */}
          <button className="bg-[#374785] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90">
            FOR EMPLOYERS
          </button>

          {/* Auth Links */}
          <div className="flex items-center space-x-2 text-sm font-semibold">
            <button className="hover:underline">JOIN</button>
            <span>|</span>
            <button className="hover:underline">LOG IN</button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white text-[#07004D] px-6 py-3 flex items-center justify-between text-sm font-semibold">
        <div className="flex space-x-6">
          <button className="hover:underline">JOBS</button>
          <button className="hover:underline">COMPANIES</button>
          <button className="hover:underline">REMOTE</button>
          <button className="hover:underline">ARTICLES</button>
          <button className="hover:underline">BEST PLACES TO WORK</button>
        </div>
        <div className="flex items-center space-x-1 text-pink-600 font-bold">
          <span>💗</span>
          <button className="hover:underline text-[#07004D]">MY ITEMS</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
