import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.hero_img2}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Rona Design was born out of a passion for cultural elegance and a
            vision to celebrate Afghan and Pakistani heritage through fashion.
            Our journey began with a dream: to create a platform where customers
            can explore and shop for traditional clothing and jewelry with ease
            and confidence.
          </p>
          <p>
            From the beginning, we've been committed to curating a rich
            selection of authentic Afghan and Pakistani dresses, handcrafted
            jewelry, and accessories that reflect timeless beauty. Every item is
            chosen with care, representing both tradition and contemporary
            style.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Rona Design, our mission is to connect people with the cultural
            roots of fashion. We strive to offer quality, authenticity, and a
            seamless shopping experience that brings the charm of Afghan and
            Pakistani craftsmanship to your doorstep.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Authentic Craftsmanship:</b>
          <p className="text-gray-600">
            At Rona Design, we handpick traditional Afghan and Pakistani dresses
            and jewelry, celebrating genuine artistry and cultural heritage.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Effortless Shopping:</b>
          <p className="text-gray-600">
            Our easy-to-use website makes discovering and purchasing timeless
            fashion simple, secure, and seamless.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer-Focused Support:</b>
          <p className="text-gray-600">
            The Rona Design team is here for you — with friendly, responsive
            service to ensure a smooth and satisfying experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
