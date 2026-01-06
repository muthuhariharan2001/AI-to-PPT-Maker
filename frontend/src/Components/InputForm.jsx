import React, { useState } from "react";

const InputForm = () => {
  const [topic, setTopic] = useState("");
  const [slideCount, setSlideCount] = useState(5);
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send request to backend
    console.log({ topic, slideCount, theme });
  };

  return (
    <form className="bg-white p-6 rounded shadow mb-6" onSubmit={handleSubmit}>
      <label className="block font-medium mb-2">Topic</label>
      <input
        className="w-full p-2 border rounded mb-4"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
        required
      />

      <label className="block font-medium mb-2">Number of Slides</label>
      <input
        type="number"
        min={1}
        max={20}
        className="w-full p-2 border rounded mb-4"
        value={slideCount}
        onChange={(e) => setSlideCount(e.target.value)}
      />

      <label className="block font-medium mb-2">Theme</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Slides
      </button>
    </form>
  );
};

export default InputForm;