import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

const Subtitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
    {children}
  </h2>
);

const Title = ({ children }) => (
  <label className="block text-sm font-semibold mb-2 text-amber-600 uppercase tracking-wide">
    {children}
  </label>
);

export default function Service() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      date: null,
      time: "",
      pack: "",
    },
  });

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  const locations = [
    "GEC Turf",
    "Khulshi Sports Arena",
    "Nasirabad Football Turf",
    "Oxygen Football Ground",
    "Agrabad Sports Arena",
  ];

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 4);

  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const periods = ["AM", "PM"];
  const timeSlots = periods.flatMap((period) =>
    hours.map((h) => {
      const start = h;
      const end = (h % 12) + 1;
      return `${start}:00 - ${end}:00 ${period}`;
    }),
  );

  const packages = [
    { id: "R", label: "Recording", price: 120, icon: "🎥" },
    { id: "H", label: "Highlights", price: 180, icon: "⚡" },
    { id: "RH", label: "Record + Highlights", price: 240, icon: "🌟" },
  ];

  useEffect(() => {
    function onDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const watchedLocation = watch("location");
  useEffect(() => {
    if (typeof watchedLocation === "string" && watchedLocation !== query) {
      setQuery(watchedLocation);
    }
  }, [watchedLocation]);

  const onSubmit = (data) => {
    const dateStr = data.date ? data.date.toDateString() : "Not selected";
    const selectedPackage = packages.find((p) => p.id === data.pack);
    alert(
      `✅ Booking Confirmed\nLocation: ${
        data.location
      }\nDate: ${dateStr}\nTime: ${data.time}\nPackage: ${
        selectedPackage
          ? `${selectedPackage.label} (${selectedPackage.price} Tk)`
          : "—"
      }`,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 py-8 px-4 text-gray-800">
      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .glass-effect {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(245, 158, 11, 0.2);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }

          .input-focus {
            transition: all 0.3s ease;
          }

          .input-focus:focus {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.3);
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 float-animation">
          <div className="inline-block mb-4 px-6 py-2 rounded-full glass-effect">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
              Premium Service
            </span>
          </div>
          <Subtitle>Book Your Service</Subtitle>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Select your preferred package and schedule
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-effect rounded-3xl shadow-2xl p-4 md:p-2">
          <div className="space-y-8" ref={containerRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-100/40 to-yellow-100/30 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-700 mb-6 flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    Booking Details
                  </h3>

                  {/* Location */}
                  <div className="relative mb-6">
                    <Title>Location</Title>
                    <Controller
                      name="location"
                      control={control}
                      rules={{ required: "Location is required" }}
                      render={({ field: { onChange, ref } }) => (
                        <>
                          <input
                            ref={ref}
                            type="text"
                            value={query}
                            placeholder="Type or select location..."
                            onFocus={() => setShowSuggestions(true)}
                            onChange={(e) => {
                              const v = e.target.value;
                              setQuery(v);
                              onChange(v);
                              setShowSuggestions(true);
                            }}
                            className="w-full bg-white border border-amber-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 input-focus"
                          />
                          {showSuggestions && (
                            <ul className="absolute z-10 bg-white border border-amber-200 rounded-xl mt-2 w-full max-h-48 overflow-y-auto shadow-lg">
                              {locations
                                .filter((loc) =>
                                  loc
                                    .toLowerCase()
                                    .includes((query || "").toLowerCase()),
                                )
                                .map((loc, i) => (
                                  <li
                                    key={i}
                                    onClick={() => {
                                      setQuery(loc);
                                      onChange(loc);
                                      setShowSuggestions(false);
                                    }}
                                    className="px-4 py-3 cursor-pointer hover:bg-amber-100 text-gray-700 first:rounded-t-xl last:rounded-b-xl"
                                  >
                                    {loc}
                                  </li>
                                ))}
                            </ul>
                          )}
                        </>
                      )}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        ⚠️ {errors.location.message}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div className="mb-6">
                    <Title>Date of Match</Title>
                    <Controller
                      control={control}
                      name="date"
                      rules={{ required: "Date is required" }}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          minDate={today}
                          maxDate={maxDate}
                          placeholderText="Select a date"
                          dateFormat="EEE, MMM d, yyyy"
                          className="w-full bg-white border border-amber-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 input-focus"
                        />
                      )}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        ⚠️ {errors.date.message}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <Title>Time Slot</Title>
                    <select
                      {...register("time", { required: "Time is required" })}
                      className="w-full bg-white border border-amber-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 input-focus cursor-pointer"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t, i) => (
                        <option key={i} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        ⚠️ {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="bg-gradient-to-br from-amber-100/40 to-yellow-100/30 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-700 mb-6 flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    Select Package
                  </h3>
                  <div className="space-y-3">
                    {packages.map((p) => (
                      <label
                        key={p.id}
                        className="group flex items-center justify-between gap-4 px-4 py-4 bg-white border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <input
                            type="radio"
                            {...register("pack", {
                              required: "Please select a package",
                            })}
                            value={p.id}
                            className="h-5 w-5 text-amber-500 focus:ring-amber-400 cursor-pointer"
                          />
                          <span className="text-2xl">{p.icon}</span>
                          <span className="font-semibold text-gray-700 group-hover:text-amber-600">
                            {p.label}
                          </span>
                        </div>
                        <div className="bg-amber-100 px-4 py-2 rounded-lg">
                          <span className="text-amber-700 font-bold">
                            {p.price} Tk
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.pack && (
                    <p className="text-red-500 text-xs mt-3 flex items-center gap-1">
                      ⚠️ {errors.pack.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4 pb-4">
              <button
                onClick={handleSubmit(onSubmit)}
                className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-xl font-bold text-white text-lg uppercase tracking-wider hover:from-amber-400 hover:to-yellow-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-300/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Pay Now
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            💡 Once you click "Pay Now", our team will contact you shortly to
            confirm your booking and provide payment instructions. Thank you for
            choosing our service!
          </p>
        </div>
      </div>
    </div>
  );
}
