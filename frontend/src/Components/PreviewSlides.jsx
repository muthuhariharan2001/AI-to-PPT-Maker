import React from "react";

const PreviewSlides = ({ slides = [] }) => {
  return (
    <div className="grid gap-4 mb-6">
      {slides.map((slide, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold text-lg text-blue-700">{slide.title}</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {slide.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PreviewSlides;