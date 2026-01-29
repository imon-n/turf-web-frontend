import { Facebook, Radio } from "lucide-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function StreamAI() {
  const [frame, setFrame] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isStreaming, setIsStreaming] = useState({
    facebook: false,
  });

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
    });
    socket.on("bestFrame", (data) => {
      setFrame(`data:image/jpeg;base64,${data}`);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected");
      setIsConnected(false);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleGoLive = (platform) => {
    setIsStreaming((prev) => ({ ...prev, [platform]: !prev[platform] }));
    // Add your streaming logic here
    console.log(`Going live on ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Radio className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-yellow-400">
              Live Streaming
            </h1>
          </div>
          <p className="text-yellow-500/80">
            Real-time frame capture and live streaming
          </p>
        </div>

        {/* Main Content */}
        <div className="relative bg-black/80 rounded-xl overflow-hidden border-2 border-yellow-400/40 w-full max-w-2xl mx-auto aspect-video flex items-center justify-center">
          {frame ? (
            <img
              src={frame}
              alt="Best Frame"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center p-8">
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-yellow-400 text-lg">Waiting for frames...</p>
            </div>
          )}
        </div>

        {/* Streaming Controls */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Facebook Button */}
          <button
            onClick={() => handleGoLive("facebook")}
            disabled={!isConnected}
            className={`relative group overflow-hidden px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isStreaming.facebook
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50"
            } ${
              !isConnected ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            } disabled:hover:scale-100`}
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
    </div>
  );
}
