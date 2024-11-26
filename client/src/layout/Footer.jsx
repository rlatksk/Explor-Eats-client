import React from "react";
import insangIkan from "@/assets/images/insang-ikan.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-[#DFC064] text-center py-8 text-secondaryColor ">
      <div
        className="absolute inset-0 opacity-25 bg-contain bg-center"
        style={{ backgroundImage: `url(${insangIkan})` }}
      ></div>
      <div className="relative grid grid-cols-2 z-10 py-8 px-12 gap-32">
        <div className="col-span-1 text-start">
          <h2 className="text-[2rem] font-bold text-secondaryColor">
            About Us
          </h2>
          <p className="mt-2 text-secondaryColor text-justify font-semibold">
            We are a team of students and food enthusiasts passionate about
            exploring and sharing our amazing dining experiences. Explor-Eats is our
            way of connecting fellow food lovers with hidden gems and
            unforgettable flavors.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col col-span-1 gap-4 text-start">
            <h3 className="text-[1.5rem] font-bold text-secondaryColor">
              Places
            </h3>
            <Link to="/" className="font-semibold hover:text-secondaryColor/80">
              Pontianak
            </Link>
            <Link to="/" className="font-semibold hover:text-secondaryColor/80">
              Singkawang
            </Link>
          </div>
          <div className="flex flex-col col-span-1 gap-4 text-start">
            <h3 className="text-[1.5rem] font-bold text-secondaryColor">
              Foods
            </h3>
            <Link
              to="/list"
              className="font-semibold hover:text-secondaryColor/80"
            >
              Food List
            </Link>
          </div>
          <div className="flex flex-col col-span-1 gap-4 text-start">
            <h3 className="text-[1.5rem] font-bold text-secondaryColor">
              About
            </h3>
            <Link
              to="/about"
              className="font-semibold hover:text-secondaryColor/80"
            >
              About Us
            </Link>
            <Link
              to="https://github.com/RubenTCs/Explor-Eats"
              target="_blank"
              className="font-semibold hover:text-secondaryColor/80"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
