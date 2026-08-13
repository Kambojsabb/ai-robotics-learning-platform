import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Code2,
  Cpu,
  Lightbulb,
  Rocket,
  School,
  Target,
  Users,
  Trophy,
  Zap,
} from "lucide-react";
import Glow from "../components/Glow";

const areas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Introduce students to AI concepts and emerging intelligent technologies.",
  },
  {
    icon: Bot,
    title: "Robotics",
    text: "Build practical understanding through robotics kits, sensors, motors and automation.",
  },
  {
    icon: Code2,
    title: "Coding & Programming",
    text: "Develop programming skills and computational thinking through practical projects.",
  },
  {
    icon: Cpu,
    title: "STEM Education",
    text: "Connect science, technology, engineering and mathematics through experiential learning.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Encourage students to experiment, design, create and develop their own solutions.",
  },
  {
    icon: Rocket,
    title: "Future Skills",
    text: "Prepare learners for a technology-driven future through continuous exposure.",
  },
];

const studentBenefits = [
  "Practical knowledge of AI and Robotics",
  "Coding and computational thinking",
  "Logical reasoning and problem solving",
  "Creativity and innovation",
  "Teamwork and collaboration",
  "Project-development skills",
  "STEM awareness",
  "Exposure to emerging technologies",
];

const schoolBenefits = [
  "AI and Robotics education",
  "Practical and experiential learning",
  "STEM and innovation culture",
  "Technology competitions",
  "Exposure to emerging technologies",
  "Future-oriented educational opportunities",
];

const journey = [
  "AI & Robotics Orientation",
  "Student Training",
  "Practical Projects",
  "Innovation",
  "Competitions",
  "Advanced Exposure",
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Glow />

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Bot size={23} />
            </div>

            <div>
              <div className="text-sm font-black tracking-[0.18em] text-white">
                iMATRIX
              </div>
              <div className="text-[9px] tracking-[0.25em] text-cyan-300">
                EDUVERSITY
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/gallery"
              className="hidden rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:block"
            >
              GALLERY
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400/20"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            EDUCATION × TECHNOLOGY × FUTURE
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            BUILDING THE
            <span className="block text-cyan-300">
              FUTURE OF LEARNING
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            iMatrix EduVersity Pvt. Ltd. is an education-focused company
            working in technology-enabled education, with a strong focus on
            Artificial Intelligence, Robotics, Coding, STEM, innovation and
            practical learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/gallery"
              className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-black text-[#04111b] transition hover:scale-105"
            >
              EXPLORE GALLERY
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              BACK TO PLATFORM
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <School size={22} />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
                    COMPANY PROFILE
                  </p>
                  <h2 className="text-xl font-black">
                    iMatrix EduVersity Pvt. Ltd.
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                A private limited company focused on education and
                technology-enabled learning.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <Info label="Incorporated" value="17 June 2021" />
                <Info label="Registered Office" value="Chandigarh" />
                <Info label="Status" value="Active" />
                <Info label="Sector" value="Education & Technology" />
                <Info label="Nature" value="Private Limited Company" />
                <Info label="CIN" value="U80902CH2021PTC043721" />
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Target size={22} />
                </div>

                <h2 className="text-xl font-black">Our Purpose</h2>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                The AI & Robotics initiative is designed to move students
                beyond theoretical learning and encourage them to learn
                concepts, build projects, experiment, solve problems and
                innovate.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Core Philosophy
                </p>

                <p className="mt-3 text-lg font-black leading-relaxed">
                  From passive learners to practical problem-solvers,
                  innovators and future-ready technology learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY AREAS */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Technology Meets Education"
            description="Our program brings emerging technologies into practical and project-based learning."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <BenefitCard
            icon={Users}
            title="Benefits for Students"
            items={studentBenefits}
          />

          <BenefitCard
            icon={School}
            title="Benefits for Schools"
            items={schoolBenefits}
          />
        </div>
      </section>

      {/* HANDS ON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-transparent p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">
                HANDS-ON LEARNING
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Learn it.
                <span className="block text-cyan-300">
                  Build it.
                </span>
                Solve it.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Students can work with robotics kits and technology-based
                projects to understand robotics components, electronics,
                programming, automation, sensors, AI concepts and project
                development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Robotics",
                "Electronics",
                "Programming",
                "Automation",
                "Sensors",
                "AI Concepts",
                "Projects",
                "Innovation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 p-4 text-xs font-bold text-slate-300"
                >
                  <Zap size={14} className="text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="IMPLEMENTATION MODEL"
            title="The Learning Journey"
            description="A structured pathway designed for continuous exposure rather than a one-time workshop."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map((item, index) => (
              <div
                key={item}
                className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center"
              >
                <div className="mx-auto mb-4 grid h-9 w-9 place-items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-xs font-bold leading-5 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12">
          <Trophy className="mx-auto text-cyan-300" size={38} />

          <p className="mt-5 text-xs font-bold tracking-[0.3em] text-cyan-300">
            COMPETITIONS & EXPOSURE
          </p>

          <h2 className="mt-3 text-3xl font-black">
            From Classroom Projects to Competition
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            The program focuses on providing students with opportunities to
            develop projects, participate in school and regional competitions
            and progress toward higher-level and international exposure,
            including World Robotics Championship (WRC) opportunities.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-xs font-bold">
            {[
              "Training",
              "Project Development",
              "School Competitions",
              "Regional Competitions",
              "Higher-Level Competitions",
              "International Exposure",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-cyan-200">
                  {item}
                </span>
                {index !== 5 && (
                  <ArrowRight size={13} className="text-slate-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <Users size={29} />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-cyan-300">
            LEADERSHIP
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Mr. Yougesh / Yogesh Naraula
          </h2>

          <p className="mt-2 text-sm font-bold text-slate-500">
            CEO
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400">
            Leadership involvement supports discussions with school
            management around the AI & Robotics initiative, implementation,
            student benefits, project structure and technology exposure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 text-center sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Explore Our Technology Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
            See the people, projects, workshops and learning experiences
            behind the AI & Robotics initiative.
          </p>

          <Link
            to="/gallery"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-black text-[#04111b] transition hover:scale-105"
          >
            OPEN GALLERY
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} iMatrix EduVersity Pvt. Ltd. ·
        Education × Technology × Future
      </footer>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
        {label}
      </div>
      <div className="mt-1 break-words text-xs font-bold text-slate-300">
        {value}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black sm:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
          <Icon size={22} />
        </div>

        <h2 className="text-xl font-black">{title}</h2>
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 rounded-xl border border-white/5 bg-black/10 p-3 text-xs text-slate-400"
          >
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}