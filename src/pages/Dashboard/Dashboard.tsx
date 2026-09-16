import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Home,
  LogOut,
  MapPin,
  Menu,
  PlayCircle,
  Settings,
  Trophy,
  User,
  Users,
  X,
  Plus,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";

type Role = "USER" | "TURF_AUTHOR" | "ADMIN";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const { role, roleLoading } = useUserRole();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const currentRole = role as Role | null;

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
      active: true,
    },
    {
      name: "My Bookings",
      icon: CalendarDays,
      path: "/dashboard/bookings",
    },
    {
      name: "My Matches",
      icon: PlayCircle,
      path: "/dashboard/matches",
    },
    {
      name: "Profile",
      icon: User,
      path: "/dashboard/profile",
    },
  ];

  if (currentRole === "TURF_AUTHOR") {
    menuItems.push({
      name: "My Turf",
      icon: Trophy,
      path: "/dashboard/my-turf",
    });
  }

  if (currentRole === "ADMIN") {
    menuItems.push(
      {
        name: "Users",
        icon: Users,
        path: "/dashboard/users",
      },
      {
        name: "Turfs",
        icon: MapPin,
        path: "/dashboard/turfs",
      }
    );
  }

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const displayName =
    user?.displayName || user?.email?.split("@")[0] || "User";

  const avatar =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      displayName
    )}&background=FACC15&color=000000&bold=true`;

  const roleLabel = roleLoading
    ? "Loading..."
    : currentRole === "TURF_AUTHOR"
    ? "Turf Author"
    : currentRole === "ADMIN"
    ? "Administrator"
    : "User";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-black text-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setSidebarOpen(false)}
            >
              <img
                src="/logo1.png"
                alt="TurfCast"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden"
            >
              <X size={22} />
            </button>
          </div>

          {/* User mini profile */}
          <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt={displayName}
                className="h-11 w-11 rounded-full object-cover"
              />

              <div className="min-w-0">
                <p className="truncate font-semibold">{displayName}</p>
                <p className="truncate text-xs text-gray-400">
                  {roleLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Menu
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      item.active
                        ? "bg-yellow-400 text-black"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Account
            </p>

            <Link
              to="/dashboard/settings"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <Settings size={19} />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Logout */}
          <div className="border-t border-white/10 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut size={19} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-gray-200 p-2.5 text-gray-700 hover:bg-gray-100 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-sm text-gray-500">Dashboard</p>
              <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                Welcome back!
              </h1>
            </div>
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-100"
            >
              <img
                src={avatar}
                alt={displayName}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="hidden text-left sm:block">
                <p className="max-w-32 truncate text-sm font-semibold">
                  {displayName}
                </p>
                <p className="text-xs text-gray-500">{roleLabel}</p>
              </div>

              <ChevronDown
                size={17}
                className={`hidden transition sm:block ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                <div className="border-b border-gray-100 p-4">
                  <p className="truncate text-sm font-semibold">
                    {displayName}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {user?.email}
                  </p>
                </div>

                <Link
                  to="/dashboard/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                >
                  <User size={17} />
                  Profile
                </Link>

                <Link
                  to="/dashboard/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                >
                  <Settings size={17} />
                  Settings
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 border-t border-gray-100 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Welcome Banner */}
          <section className="relative mb-8 overflow-hidden rounded-2xl bg-black px-6 py-8 text-white sm:px-8 sm:py-10">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-3 inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                {roleLabel}
              </div>

              <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Hello, {displayName.split(" ")[0]}!
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
                Manage your bookings, matches and TurfCast activities from
                your dashboard.
              </p>

              <Link
                to="/book-slot"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
              >
                Book a Slot
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10" />
            <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-yellow-400/5" />
          </section>

          {/* Stats */}
          <section className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard
              icon={CalendarDays}
              title="Total Bookings"
              value="0"
              description="All your bookings"
            />

            <StatCard
              icon={PlayCircle}
              title="Matches Recorded"
              value="0"
              description="Recorded matches"
            />

            <StatCard
              icon={Clock3}
              title="Upcoming Matches"
              value="0"
              description="Upcoming matches"
            />

            <StatCard
              icon={Trophy}
              title="Saved Highlights"
              value="0"
              description="Your highlights"
            />
          </section>

          {/* Role-specific overview */}
          {currentRole === "TURF_AUTHOR" && (
            <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Turf Overview</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage your turf and monitor its activity.
                  </p>
                </div>

                <Link
                  to="/dashboard/my-turf"
                  className="hidden items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 sm:flex"
                >
                  Manage Turf
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <MiniStat title="My Turfs" value="0" />
                <MiniStat title="Bookings" value="0" />
                <MiniStat title="Matches" value="0" />
                <MiniStat title="Recordings" value="0" />
              </div>

              <Link
                to="/dashboard/my-turf"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white sm:hidden"
              >
                Manage Turf
                <ArrowRight size={16} />
              </Link>
            </section>
          )}

          {currentRole === "ADMIN" && (
            <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Admin Overview</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage users, turfs and platform activities.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <MiniStat title="Total Users" value="0" />
                <MiniStat title="Total Turfs" value="0" />
                <MiniStat title="Bookings" value="0" />
                <MiniStat title="Matches" value="0" />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  to="/dashboard/users"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <Users size={18} />
                    </div>
                    <span className="font-semibold">Manage Users</span>
                  </div>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/dashboard/turfs"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <MapPin size={18} />
                    </div>
                    <span className="font-semibold">Manage Turfs</span>
                  </div>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </section>
          )}

          {/* Recent Bookings + Upcoming */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Recent Bookings */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Recent Bookings</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Your latest turf bookings
                  </p>
                </div>

                <Link
                  to="/dashboard/bookings"
                  className="text-sm font-semibold text-gray-700 hover:text-black"
                >
                  View All
                </Link>
              </div>

              <EmptyState
                icon={CalendarDays}
                title="No bookings yet"
                description="You haven't made any turf bookings."
                buttonText="Book a Slot"
                path="/book-slot"
              />
            </div>

            {/* Upcoming Matches */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Upcoming Matches</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Your scheduled matches
                  </p>
                </div>

                <Link
                  to="/dashboard/matches"
                  className="text-sm font-semibold text-gray-700 hover:text-black"
                >
                  View All
                </Link>
              </div>

              <EmptyState
                icon={Clock3}
                title="No upcoming matches"
                description="Your upcoming matches will appear here."
                buttonText="Book a Match"
                path="/book-slot"
              />
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
              <h3 className="text-lg font-bold">Quick Actions</h3>
              <p className="mt-1 text-sm text-gray-500">
                Quickly access your most used features.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <QuickAction
                icon={Plus}
                title="Book a Slot"
                path="/book-slot"
              />

              <QuickAction
                icon={CalendarDays}
                title="My Bookings"
                path="/dashboard/bookings"
              />

              <QuickAction
                icon={PlayCircle}
                title="My Matches"
                path="/dashboard/matches"
              />

              <QuickAction
                icon={User}
                title="My Profile"
                path="/dashboard/profile"
              />
            </div>
          </section>

          {/* Status */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <CheckCircle2 size={14} />
            TurfCast Dashboard
          </div>
        </div>
      </main>
    </div>
  );
};

type StatCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
};

const StatCard = ({
  icon: Icon,
  title,
  value,
  description,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-2">
        <div className="rounded-xl bg-yellow-100 p-2.5 text-yellow-700">
          <Icon size={20} />
        </div>
      </div>

      <p className="text-2xl font-bold sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm font-semibold text-gray-800">{title}</p>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
};

const MiniStat = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{title}</p>
    </div>
  );
};

type EmptyStateProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  path: string;
};

const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonText,
  path,
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 text-center">
      <div className="mb-3 rounded-full bg-white p-3 shadow-sm">
        <Icon size={24} className="text-gray-400" />
      </div>

      <h4 className="font-semibold">{title}</h4>

      <p className="mt-1 max-w-xs text-sm text-gray-500">
        {description}
      </p>

      <Link
        to={path}
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        {buttonText}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

const QuickAction = ({
  icon: Icon,
  title,
  path,
}: {
  icon: React.ElementType;
  title: string;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-yellow-400 hover:bg-yellow-50"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-gray-100 p-2.5 transition group-hover:bg-yellow-400">
          <Icon size={18} />
        </div>

        <span className="text-sm font-semibold">{title}</span>
      </div>

      <ArrowRight
        size={16}
        className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-black"
      />
    </Link>
  );
};

export default Dashboard;