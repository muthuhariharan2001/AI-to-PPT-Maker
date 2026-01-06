import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // Trigger download API call
    alert("Downloading PPT...");
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={handleDownload}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Download PPT
      </button>
    </div>
  );
};

export default DownloadButton;