// PracticeLayout.jsx
import React from "react";

const PracticeLayout = ({ title, description, services }) => {
  return (
    <div className="bg-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          {description}
        </p>

        {/* Services */}
        <h2 className="text-2xl font-semibold mb-6">
          Our Services
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {services.map((item, i) => (
            <li
              key={i}
              className="bg-gray-900 border border-gray-800 p-4 rounded hover:border-yellow-500 transition"
            >
              ✔ {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeLayout;