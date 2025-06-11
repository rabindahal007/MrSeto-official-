import React from 'react';

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full  text-white flex justify-end items-center px-4 py-2"
      // dark gradient background for premium feel
    >
      <div className="flex items-center gap-1">
        <span className="text-gray-400 text-xs font-sans">Powered by</span>
        <span className="text-lg font-semibold font-mono tracking-tight text-indigo-300">
          RD Pro
        </span>
      </div>
    </footer>
  );
};

export default Footer;
