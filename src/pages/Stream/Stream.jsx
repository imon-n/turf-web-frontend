import { Facebook } from "lucide-react";
import { useState } from "react";

export default function Stream() {
  const streamUrl = "http://192.168.0.101:8080/video"; // your camera IP
  const [isStreaming, setIsStreaming] = useState({
    facebook: false,
    youtube: false,
  });

  // POST to backend
  const sendStreamUrl = async (url) => {
    try {
      const res = await fetch("http://localhost:5000/api/send-ip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ip: url }),
      });

      const data = await res.json();
      console.log("Server response:", data);
    } catch (err) {
      console.error("Error sending IP:", err);
    }
  };

  // Handle "Go Live" click
  const handleGoLive = (platform) => {
    setIsStreaming((prev) => ({ ...prev, [platform]: !prev[platform] }));
    console.log(`Going live on ${platform}`);
    // Send stream URL to server
    if (platform === "facebook") {
      sendStreamUrl(streamUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 gap-6">
      {/* Camera Stream */}
      <div className="w-4/5 max-w-3xl aspect-video border-4 border-white rounded-2xl shadow-lg overflow-hidden bg-gray-800 flex items-center justify-center">
        <img
          src={streamUrl}
          alt="Camera stream not available"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML =
              '<div class="text-center"><p class="text-gray-400 text-lg">Camera stream not available</p></div>';
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleGoLive("facebook")}
          className={`relative group overflow-hidden px-4 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            isStreaming.facebook
              ? "bg-yellow-700 hover:bg-yellow-600 text-white shadow-lg shadow-blue-500/50"
              : "bg-yellow-700 hover:bg-yellow-700 text-white shadow-lg hover:shadow-blue-500/50"
          } hover:scale-105`}
        >
          <Facebook className="w-4 h-4" />
          {isStreaming.facebook ? (
            <>
              <span>Live on Facebook</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </>
          ) : (
            "Go Live on Facebook"
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );
}
