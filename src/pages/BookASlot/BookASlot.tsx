"use client";

import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "next/link";
import { CalendarDays, MapPin, Clock, CreditCard } from "lucide-react";

interface Turf {
  _id: string;
  name: string;
  image?: string;

  location: {
    address: string;
    area: string;
    city: string;

    coordinates: {
      type: "Point";
      coordinates: [number, number];
    };
  };

  status: "ACTIVE" | "INACTIVE";
}

interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
}

const packages: Package[] = [
  {
    id: "recorded",
    name: "Recorded Match",
    description: "Full match recording",
    price: 120,
  },
  {
    id: "highlights",
    name: "Highlights",
    description: "Automatically generated highlights",
    price: 180,
  },
  {
    id: "all",
    name: "Record + Highlights",
    description: "Full recording with highlights",
    price: 240,
  },
];

const slots = [
  "08:00 AM - 09:30 AM",
  "10:00 AM - 11:30 AM",
  "12:00 PM - 01:30 PM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM",
  "06:00 PM - 07:30 PM",
  "08:00 PM - 09:30 PM",
  "10:00 PM - 11:30 PM",
];

export default function BookASlot() {
  const { turfId } = useParams();
  const navigate = useNavigate();

  const [turfs, setTurfs] = useState<Turf[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedTurfId, setSelectedTurfId] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  // --------------------------------
  // Fetch Turfs
  // --------------------------------

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/turfs"
        );

        const result = await response.json();

        if (result.success) {
          const activeTurfs = result.data.filter(
            (turf: Turf) => turf.status === "ACTIVE"
          );

          setTurfs(activeTurfs);

          // If turfId exists in URL
          if (turfId) {
            const selectedTurf = activeTurfs.find(
              (turf: Turf) => turf._id === turfId
            );

            if (selectedTurf) {
              setSelectedTurfId(selectedTurf._id);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch turfs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTurfs();
  }, [turfId]);

  // --------------------------------
  // Selected Turf
  // --------------------------------

  const selectedTurf = turfs.find(
    (turf) => turf._id === selectedTurfId
  );

  // --------------------------------
  // Cities
  // --------------------------------

  const cities = useMemo(() => {
    return [...new Set(turfs.map((turf) => turf.location.city))];
  }, [turfs]);

  // --------------------------------
  // Areas
  // --------------------------------

  const areas = useMemo(() => {
    if (!selectedCity) return [];

    return [
      ...new Set(
        turfs
          .filter(
            (turf) => turf.location.city === selectedCity
          )
          .map((turf) => turf.location.area)
      ),
    ];
  }, [turfs, selectedCity]);

  // --------------------------------
  // Turfs according to city + area
  // --------------------------------

  const filteredTurfs = useMemo(() => {
    if (!selectedCity || !selectedArea) return [];

    return turfs.filter(
      (turf) =>
        turf.location.city === selectedCity &&
        turf.location.area === selectedArea
    );
  }, [turfs, selectedCity, selectedArea]);

  // --------------------------------
  // Upcoming 5 Days
  // --------------------------------

  const upcomingDates = useMemo(() => {
    const dates = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date();

      date.setDate(date.getDate() + i);

      dates.push(date);
    }

    return dates;
  }, []);

  // --------------------------------
  // Format Date
  // --------------------------------

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // --------------------------------
  // Select City
  // --------------------------------

  const handleCityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const city = event.target.value;

    setSelectedCity(city);
    setSelectedArea("");
    setSelectedTurfId("");
  };

  // --------------------------------
  // Select Area
  // --------------------------------

  const handleAreaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const area = event.target.value;

    setSelectedArea(area);
    setSelectedTurfId("");
  };

  // --------------------------------
  // Select Turf
  // --------------------------------

  const handleTurfChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTurfId(event.target.value);
  };

  // --------------------------------
  // Payment
  // --------------------------------

  const handlePayment = () => {
    if (!selectedTurfId) {
      alert("Please select a turf.");
      return;
    }

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }

    if (!selectedPackage) {
      alert("Please select a package.");
      return;
    }

    const selectedPackageData = packages.find(
      (item) => item.id === selectedPackage
    );

    console.log({
      turfId: selectedTurfId,
      date: selectedDate,
      slot: selectedSlot,
      package: selectedPackage,
      price: selectedPackageData?.price,
    });

    alert("Ready for payment!");
  };

  // --------------------------------
  // Loading
  // --------------------------------

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-96 rounded-2xl bg-white animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Book a Slot
          </h1>

          <p className="mt-2 text-gray-600">
            Choose your turf, date, time and service package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ========================= */}
          {/* LEFT SIDE */}
          {/* ========================= */}

          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

            {/* Select Turf */}

            {!turfId && (
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Select Turf
                </h2>

                {/* City */}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>

                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  >
                    <option value="">
                      Select city
                    </option>

                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Area */}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area
                  </label>

                  <select
                    value={selectedArea}
                    onChange={handleAreaChange}
                    disabled={!selectedCity}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 disabled:bg-gray-100"
                  >
                    <option value="">
                      {selectedCity
                        ? "Select area"
                        : "Select city first"}
                    </option>

                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Turf */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Turf
                  </label>

                  <select
                    value={selectedTurfId}
                    onChange={handleTurfChange}
                    disabled={!selectedArea}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 disabled:bg-gray-100"
                  >
                    <option value="">
                      {selectedArea
                        ? "Select turf"
                        : "Select area first"}
                    </option>

                    {filteredTurfs.map((turf) => (
                      <option
                        key={turf._id}
                        value={turf._id}
                      >
                        {turf.name} — {turf.location.address}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Selected Turf Information */}

            {selectedTurf && !turfId && (
              <div className="rounded-xl bg-gray-50 border p-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 text-gray-500"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {selectedTurf.name}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {selectedTurf.location.address}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {selectedTurf.location.area},{" "}
                      {selectedTurf.location.city}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Date */}

            <div>
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays size={20} />
                <h2 className="text-lg font-semibold">
                  Select Date
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {upcomingDates.map((date) => {
                  const dateString = date
                    .toISOString()
                    .split("T")[0];

                  const selected =
                    selectedDate === dateString;

                  return (
                    <button
                      key={dateString}
                      type="button"
                      onClick={() =>
                        setSelectedDate(dateString)
                      }
                      className={`
                        rounded-lg
                        border
                        px-2
                        py-3
                        text-sm
                        transition
                        ${
                          selected
                            ? "bg-yellow-400 border-yellow-400 text-black font-semibold"
                            : "bg-white border-gray-300 hover:border-yellow-400"
                        }
                      `}
                    >
                      {formatDate(date)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot */}

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} />

                <h2 className="text-lg font-semibold">
                  Select Time Slot
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slots.map((slot) => {
                  const selected = selectedSlot === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`
                        border
                        rounded-lg
                        px-4
                        py-3
                        text-sm
                        text-left
                        transition
                        ${
                          selected
                            ? "border-yellow-400 bg-yellow-50 font-semibold"
                            : "border-gray-300 hover:border-yellow-400"
                        }
                      `}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-semibold mb-6">
              Select Package
            </h2>

            <div className="space-y-4">
              {packages.map((item) => {
                const selected =
                  selectedPackage === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSelectedPackage(item.id)
                    }
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      border
                      rounded-xl
                      p-4
                      text-left
                      transition
                      ${
                        selected
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 hover:border-yellow-400"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">

                      {/* Radio */}

                      <div
                        className={`
                          w-5
                          h-5
                          rounded-full
                          border
                          flex
                          items-center
                          justify-center
                          ${
                            selected
                              ? "border-yellow-500"
                              : "border-gray-400"
                          }
                        `}
                      >
                        {selected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <span className="font-semibold text-sm bg-yellow-100 px-3 py-2 rounded-lg">
                      ৳ {item.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Summary */}

            <div className="mt-8 border-t pt-6 space-y-3">

              <h3 className="font-semibold text-lg mb-4">
                Booking Summary
              </h3>

              {selectedTurf && (
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">
                    Turf
                  </span>

                  <span className="font-medium text-right">
                    {selectedTurf.name}
                  </span>
                </div>
              )}

              {selectedDate && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Date
                  </span>

                  <span className="font-medium">
                    {selectedDate}
                  </span>
                </div>
              )}

              {selectedSlot && (
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">
                    Slot
                  </span>

                  <span className="font-medium text-right">
                    {selectedSlot}
                  </span>
                </div>
              )}

              {selectedPackage && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Package
                  </span>

                  <span className="font-medium">
                    {
                      packages.find(
                        (item) =>
                          item.id === selectedPackage
                      )?.name
                    }
                  </span>
                </div>
              )}

              {/* Total */}

              <div className="border-t pt-4 mt-4 flex justify-between">
                <span className="font-semibold">
                  Total
                </span>

                <span className="text-xl font-bold">
                  ৳{" "}
                  {packages.find(
                    (item) =>
                      item.id === selectedPackage
                  )?.price || 0}
                </span>
              </div>
            </div>

            {/* Payment Button */}

            <button
              type="button"
              onClick={handlePayment}
              className="
                mt-6
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-3.5
                bg-yellow-400
                text-black
                rounded-lg
                font-semibold
                hover:bg-yellow-300
                transition
              "
            >
              <CreditCard size={18} />

              Pay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}