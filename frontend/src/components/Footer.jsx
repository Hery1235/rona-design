import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="flex gap-2 items-center">
            <img src={assets.ronalogo} className="mb-5 w-16" alt="" />
            <h1>Rona Design</h1>
          </div>

          <p className="w-full md:w-2/3 text-gray-600">
            Discover a unique blend of Afghan and Pakistani fashion with our
            exclusive collections of traditional dresses and handcrafted
            jewelry. From best sellers to the latest arrivals, we bring timeless
            elegance to your wardrobe.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+44 7908238907</li>
            <li>Rona.Design122@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Ronadesign.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
