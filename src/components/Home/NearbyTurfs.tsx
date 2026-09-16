import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MapPin, Star } from "lucide-react";
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

export default function NearbyTurfs() {
  const [turfs, setTurfs] = useState<Turf[]>([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

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

  const activeTurfs = turfs
    .filter((turf) => turf.status === "ACTIVE")
    .slice(0, 4);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Turfs Near You
            </h2>

            <p className="mt-2 text-gray-600">
              Find a turf nearby and book your match.
            </p>
          </div>

          <Link
            to="/turfs"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            View All →
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                  h-[330px]
                  w-full
                  animate-pulse
                  rounded-2xl
                  bg-white
                  shadow-lg
                  md:min-w-[260px]
                  md:max-w-[260px]
                "
              />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && activeTurfs.length === 0 && (
          <div className="py-10 text-center text-gray-500">
            No turfs available right now.
          </div>
        )}

        {/* Turf Cards */}
        {!loading && activeTurfs.length > 0 && (
          <div
            className="
              grid grid-cols-2 gap-4
              md:flex md:gap-5 md:overflow-x-auto md:pb-4
              md:scrollbar-hide
            "
          >
            {activeTurfs.map((turf) => (
              <div
                key={turf._id}
                className="
                  w-full overflow-hidden rounded-2xl bg-white shadow-lg
                  transition hover:shadow-xl
                  md:min-w-[260px] md:max-w-[260px] md:shrink-0
                "
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={
                      turf.image ||
                      "https://via.placeholder.com/600x400?text=Turf"
                    }
                    alt={turf.name}
                    className="h-36 w-full object-cover sm:h-40 md:h-44"
                  />

                  {/* Rating */}
                  <div
                    className="
                      absolute right-2 top-2 flex items-center gap-1
                      rounded-full bg-white px-2 py-1 shadow
                    "
                  >
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-xs font-semibold">4.8</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 p-4">
                  <h3 className="truncate text-base font-semibold md:text-lg">
                    {turf.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-start gap-1.5 text-gray-600">
                    <MapPin size={14} className="mt-0.5 shrink-0" />

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium md:text-sm">
                        {turf.location.area}, {turf.location.city}
                      </p>

                      <p className="mt-1 line-clamp-1 text-[10px] text-gray-500 md:text-xs">
                        {turf.location.address}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    to={`/book-slot/${turf._id}`}
                    className="
                      block w-full rounded-md bg-yellow-400 py-2.5
                      text-center text-xs font-medium text-black
                      transition hover:bg-yellow-300 md:text-sm
                    "
                  >
                    Book a Slot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}