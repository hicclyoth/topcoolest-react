import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-12 bg-white">
      <h1 className="font-extrabold text-3xl">Top Coolest</h1>
      <ul className="flex justify-between items-center text-neutral-700">
        <li className="px-2">Home</li>
        <li className="px-2">About</li>
        <li className="px-2">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
