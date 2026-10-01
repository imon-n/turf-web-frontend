"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  Star,
  CalendarDays,
  ChevronDown,
  Building2,
} from "lucide-react";
import useAxios from "../../hooks/useAxios";

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

export default function Turfs() {
  const axiosInstance = useAxios();

  const [turfs, setTurfs] = useState<Turf[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [area, setArea] = useState("All Areas");

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await axiosInstance.get("/api/turfs");

        if (response.data.success) {
          setTurfs(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch turfs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTurfs();
  }, [axiosInstance]);

  const activeTurfs = useMemo(() => {
    return turfs.filter((turf) => turf.status === "ACTIVE");
  }, [turfs]);

  const cities = useMemo(() => {
    return [
      "All Cities",
      ...Array.from(
        new Set(activeTurfs.map((turf) => turf.location.city))
      ),
    ];
  }, [activeTurfs]);

  const areas = useMemo(() => {
    const filteredByCity =
      city === "All Cities"
        ? activeTurfs
        : activeTurfs.filter((turf) => turf.location.city === city);

    return [
      "All Areas",
      ...Array.from(
        new Set(filteredByCity.map((turf) => turf.location.area))
      ),
    ];
  }, [activeTurfs, city]);

  const filteredTurfs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return activeTurfs.filter((turf) => {
      const matchesSearch =
        !query ||
        turf.name.toLowerCase().includes(query) ||
        turf.location.area.toLowerCase().includes(query) ||
        turf.location.city.toLowerCase().includes(query) ||
        turf.location.address.toLowerCase().includes(query);

      const matchesCity =
        city === "All Cities" || turf.location.city === city;

      const matchesArea =
        area === "All Areas" || turf.location.area === area;

      return matchesSearch && matchesCity && matchesArea;
    });
  }, [activeTurfs, search, city, area]);

  const handleCityChange = (value: string) => {
    setCity(value);
    setArea("All Areas");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
              Find Your Turf
            </p>

            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl">
              Book Your
              <span className="text-yellow-500"> Perfect Turf</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Explore available turfs, find a location that works for you,
              and book your match with TurfCast.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-6 md:px-10">
        <div className="rounded-2xl bg-white p-4 shadow-xl md:p-5">
          <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Search */}
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search turf, area or city..."
                className="
                  h-12 w-full rounded-xl border border-gray-200
                  bg-gray-50 pl-11 pr-4 text-sm text-gray-800
                  outline-none transition
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100
                "
              />
            </div>

            {/* City */}
            <div className="relative">
              <Building2
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={city}
                onChange={(e) => handleCityChange(e.target.value)}
                className="
                  h-12 w-full appearance-none rounded-xl border
                  border-gray-200 bg-gray-50 pl-11 pr-10 text-sm
                  text-gray-800 outline-none transition
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100
                "
              >
                {cities.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Area */}
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="
                  h-12 w-full appearance-none rounded-xl border
                  border-gray-200 bg-gray-50 pl-11 pr-10 text-sm
                  text-gray-800 outline-none transition
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100
                "
              >
                {areas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Turf List */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Available Turfs
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Explore Turfs
            </h2>
          </div>

          {!loading && (
            <p className="text-sm text-gray-500">
              {filteredTurfs.length}{" "}
              {filteredTurfs.length === 1 ? "turf" : "turfs"} found
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="h-44 animate-pulse bg-gray-200" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && filteredTurfs.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              <MapPin size={28} className="text-yellow-600" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              No turfs found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Try changing your search or filters to find available turfs.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCity("All Cities");
                setArea("All Areas");
              }}
              className="
                mt-5 rounded-lg bg-yellow-400 px-6 py-2.5
                text-sm font-semibold text-black transition
                hover:bg-yellow-300
              "
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Cards */}
        {!loading && filteredTurfs.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {filteredTurfs.map((turf) => (
              <div
                key={turf._id}
                className="
                  group overflow-hidden rounded-2xl bg-white shadow-md
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      turf.image ||
                      "https://via.placeholder.com/600x400?text=Turf"
                    }
                    alt={turf.name}
                    className="
                      h-36 w-full object-cover
                      transition duration-500
                      group-hover:scale-105
                      sm:h-44
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Status */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-green-700 shadow sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Available
                  </div>

                  {/* Rating */}
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-[10px] font-semibold text-gray-800 sm:text-xs">
                      4.8
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="truncate text-sm font-bold text-gray-900 sm:text-lg">
                    {turf.name}
                  </h3>

                  <div className="mt-2 flex items-start gap-1.5 text-gray-500">
                    <MapPin
                      size={14}
                      className="mt-0.5 shrink-0 text-yellow-600"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-gray-700 sm:text-sm">
                        {turf.location.area}, {turf.location.city}
                      </p>

                      <p className="mt-0.5 line-clamp-1 text-[10px] text-gray-400 sm:text-xs">
                        {turf.location.address}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/book-slot/${turf._id}`}
                    className="
                      mt-4 flex w-full items-center justify-center gap-2
                      rounded-lg bg-yellow-400 py-2.5
                      text-xs font-semibold text-black
                      transition-all duration-300
                      hover:bg-yellow-300
                      sm:text-sm
                    "
                  >
                    <CalendarDays size={15} />
                    Book a Slot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}