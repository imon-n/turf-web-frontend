import {
  Camera,
  PlayCircle,
  Sparkles,
  Target,
  Users,
  Trophy,
  Video,
  Zap,
  Linkedin,
  Mail,
} from "lucide-react";


const teamMembers = [
  {
    name: "Meherazul Abedin Rifat",
    role: "Co-Founder & Operations Lead",
    image: "/team/rifat.jpg",
    linkedin: "https://www.linkedin.com/in/meherazrifat919/",
    email: "meherazrifat919@gmail.com",
  },
  {
    name: "Shah Shaybal Rishath",
    role: "Co-Founder & Automation Lead",
    image: "/team/risat.jpg",
    linkedin: "https://www.linkedin.com/in/shah-shaybal-rishath-b16200277/",
    email: "sshaybalrishath@gmail.com",
  },
  {
    name: "Nur Mohammad Imon",
    role: "Co-Founder & Tech Lead",
    image: "/team/imon.jpg",
    linkedin: "https://www.linkedin.com/in/nur-mohammad-imon-29a2b4255/",
    email: "imon.eeecu@gmail.com",
  },
];
export default function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 text-sm text-yellow-300">
              <Sparkles size={15} />
              Sports. Technology. Memories.
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Every Match Deserves
              <span className="text-yellow-400"> to Be Remembered.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-8">
              TurfCast is a sports recording and highlights platform designed to
              capture your turf football matches and turn them into memories you
              can watch, share and relive.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/turfs"
                className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition"
              >
                Explore Turfs
              </a>

              <a
                href="/book-slot"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Book a Slot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Visual */}

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"
                  alt="Football match"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 md:right-6 rounded-xl bg-white shadow-xl border border-gray-100 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-yellow-100 p-3">
                    <Camera className="text-yellow-600" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Capture</p>

                    <p className="font-bold">Every Moment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                About TurfCast
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Bringing Technology to
                <span className="text-yellow-500"> Local Football</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                TurfCast is built around a simple idea: your local football
                matches should be more than just a game that ends after 90
                minutes. We combine camera technology, cloud processing and AI-powered
                video analysis to record matches and generate engaging
                highlights for players, teams and sports communities.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Our goal is to make professional-style match recording
                accessible to everyday football players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              From Kickoff to Highlights
            </h2>

            <p className="mt-4 text-gray-600">
              A simple technology-driven workflow turns your match into a video
              you can keep forever.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                icon: Video,
                title: "Book Your Match",
                text: "Choose a participating turf, date and available time slot.",
              },
              {
                number: "02",
                icon: Camera,
                title: "Match Recording",
                text: "The match is captured using a dedicated camera setup.",
              },
              {
                number: "03",
                icon: Zap,
                title: "AI Processing",
                text: "Our processing pipeline analyzes the recorded footage.",
              },
              {
                number: "04",
                icon: PlayCircle,
                title: "Watch & Relive",
                text: "Get your match recording and generated highlights.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-yellow-100 p-3">
                      <Icon className="text-yellow-600" size={22} />
                    </div>

                    <span className="text-3xl font-bold text-gray-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gray-950 px-6 py-14 md:px-16 md:py-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex rounded-xl bg-yellow-400 p-3">
                  <Target className="text-black" />
                </div>

                <h2 className="mt-5 text-3xl md:text-4xl font-bold">
                  Our Mission
                </h2>

                <p className="mt-5 text-gray-300 leading-8">
                  We want to make sports video technology accessible to local
                  football communities—not just professional clubs and large
                  stadiums.
                </p>

                <p className="mt-4 text-gray-300 leading-8">
                  Every goal, save, pass and celebration can become a memory.
                  TurfCast aims to make capturing those moments simple and
                  affordable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <Users className="text-yellow-400" />

                  <h3 className="mt-4 font-semibold">For Players</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Watch and share your best moments.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <Trophy className="text-yellow-400" />

                  <h3 className="mt-4 font-semibold">For Teams</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Keep your matches and highlights.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <Camera className="text-yellow-400" />

                  <h3 className="mt-4 font-semibold">For Turfs</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Offer a better experience to customers.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <Sparkles className="text-yellow-400" />

                  <h3 className="mt-4 font-semibold">Powered by AI</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Turn raw footage into useful content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Built for Your Game
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Video className="text-yellow-500" size={32} />

              <h3 className="mt-5 text-xl font-semibold">Recorded Matches</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Get your full match recording so you can watch the entire game
                again whenever you want.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Sparkles className="text-yellow-500" size={32} />

              <h3 className="mt-5 text-xl font-semibold">AI Highlights</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Automatically process your match footage and create engaging
                highlights from the game.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <PlayCircle className="text-yellow-500" size={32} />

              <h3 className="mt-5 text-xl font-semibold">Share Your Moments</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Keep your football memories and share the best moments with
                teammates and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Team Intro */}

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Meet the People Behind TurfCast
            </h2>
          </div>

          {/* Team Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>

                  <p className="mt-1 text-sm font-medium text-yellow-500">
                    {member.role}
                  </p>

                  {/* Social Links */}

                  <div className="flex justify-center items-center gap-4 mt-5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-yellow-500 transition"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Capture the Game.
            <span className="text-yellow-500"> Relive the Moments.</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
            Find a participating turf, book your slot, and capture your football
            moments with TurfCast.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/turfs"
              className="px-7 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
            >
              Find a Turf
            </a>

            <a
              href="/book-slot"
              className="px-7 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-white transition"
            >
              Book a Slot
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
