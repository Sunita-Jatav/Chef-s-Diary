import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const aboutHandler = () => {
    navigate("/recipes");
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen p-10">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-6 drop-shadow-lg">
        Welcome to Chef's Diary
      </h1>
      <h2 className="text-xl text-center mb-10 text-gray-300">
        Where Every Recipe Tells a Story
      </h2>

      {/* Mission / Introduction */}
      <section className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=440&auto=format&fit=crop"
          alt="Chef"
          className="w-48 rounded-lg shadow-lg"
        />
        <p className="text-lg leading-relaxed text-gray-200">
          At <span className="font-semibold">Chef's Diary</span>, we believe that every recipe is more than just a list of ingredients—it’s a story, a memory, a piece of someone’s culinary journey. Our platform gives food enthusiasts a space to <span className="font-semibold">share their creations publicly</span>, inspire others, and celebrate the joy of cooking.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-6">
        <p className="text-lg text-gray-200 leading-relaxed md:w-2/3">
          <span className="font-semibold">Create & Share:</span> Post your unique recipes and let the world enjoy them.<br/>
          <span className="font-semibold">Search & Explore:</span> Discover recipes from other passionate cooks.<br/>
          <span className="font-semibold">Update & Refine:</span> Keep your recipes fresh and perfect over time.<br/>
          <span className="font-semibold">Delete When Needed:</span> Maintain control over your shared content effortlessly.
        </p>
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=440&auto=format&fit=crop"
          alt="Recipe"
          className="w-48 rounded-lg shadow-lg"
        />
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1653233797467-1a528819fd4f?q=80&w=870&auto=format&fit=crop"
          alt="Cooking"
          className="w-48 rounded-lg shadow-lg"
        />
        <p className="text-lg text-gray-200 leading-relaxed md:w-2/3">
          We aim to create a <span className="font-semibold">community of home chefs and food lovers</span>, where sharing recipes becomes sharing memories. Whether it’s a family favorite, a personal experiment, or a classic dish with a twist, Chef’s Diary connects people through food.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Us:</h3>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Be part of a growing network of creators, explore the world of flavors, and let every recipe you share tell its story. <span className="font-semibold">Chef's Diary is your platform, your kitchen, your diary.</span>
        </p>
        <button
          onClick={aboutHandler}
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;


