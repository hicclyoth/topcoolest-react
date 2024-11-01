import React from "react";
import Article from "./Article";

const Hero = () => {
  return (
    <div className="hero bg-neutral-100 min-h-max pt-20 px-16">
      <figure className="flex justify-center px-4">
        <img
          src="https://topcoolest.com/img/1.jpg"
          alt=""
          className="w-6/12 h-auto rounded-md mr-28"
        />
        <figcaption>
          <h1 className="font-extrabold text-2xl my-4">Welcome</h1>
          <p>
            You have reached Top Coolest where you will find amazing content.
          </p>
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Hero;
