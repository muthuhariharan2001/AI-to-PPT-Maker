import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch from backend
    setHistory([
      { topic: "OOP in Java", date: "2024-06-01" },
      { topic: "File Handling", date: "2024-06-10" },
    ]);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-3 text-gray-800">History</h2>
      <ul className="text-gray-600">
        {history.map((item, index) => (
          <li key={index} className="mb-1">
            📄 {item.topic} - <span className="text-sm">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
