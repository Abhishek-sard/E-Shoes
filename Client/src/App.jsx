import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="bg-[#060042] text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">buil</span>
          <span className="border-2 border-blue-500 px-1">t</span>
          <span className="text-white">in</span>
        </div>

        <div className="flex items-center space-x-6">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
          </button>

          <button className="bg-blue-800 text-white px-4 py-2 rounded-md font-semibold">
            FOR EMPLOYERS
          </button>

          <div className="flex items-center space-x-4">
            <button className="font-semibold">JOIN</button>
            <span className="text-blue-300">|</span>
            <button className="font-semibold">LOG IN</button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white text-[#060042] flex justify-center space-x-8 py-3 font-bold text-sm tracking-wider">
        <a href="#">JOBS</a>
        <a href="#">COMPANIES</a>
        <a href="#">REMOTE</a>
        <a href="#">ARTICLES</a>
        <a href="#">BEST PLACES TO WORK</a>
        <a href="#" className="flex items-center text-pink-600">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          MY ITEMS
        </a>
      </div>
    </div>
  );
};

export default Navbar;
