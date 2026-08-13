import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, X, Maximize2 } from "lucide-react";
import Glow from "../components/Glow";

const categories = [
  "ALL",
  "AI",
  "ROBOTICS",
  "WORKSHOPS",
  "STUDENTS",
  "EVENTS",
];



const gallery = Array.from({ length: 70 }, (_, index) => ({
  src: `/gallery/photo${String(index + 1).padStart(2, "0")}.jpeg`,
  title: `iMatrix EduVersity Event ${index + 1}`,
  category: "EVENTS",
}));

export default function Gallery() {
  const [category, setCategory] = useState("ALL");
  const [selected, setSelected] = useState(null);

  const filtered =
    category === "ALL"
      ? gallery
      : gallery.filter((item) => item.category === category);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Glow />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Bot size={22} />
            </div>

            <div>
              <div className="text-sm font-black tracking-[0.18em]">
                iMATRIX
              </div>
              <div className="text-[9px] tracking-[0.25em] text-cyan-300">
                GALLERY
              </div>
            </div>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <ArrowLeft size={14} />
            ABOUT
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="px-5 pb-12 pt-20 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">
          iMATRIX EDUVERSITY
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          OUR
          <span className="text-cyan-300"> GALLERY</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
          A visual journey through AI, Robotics, STEM learning, workshops,
          student projects and technology experiences.
        </p>
      </section>

      {/* FILTERS */}
      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-xl border px-4 py-2 text-[10px] font-black tracking-wider transition ${
                category === item
                  ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                  : "border-white/10 bg-white/[0.03] text-slate-500 hover:text-slate-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <main className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <EmptyGallery />
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  onClick={() => setSelected(item)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-black text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[9px] font-bold text-cyan-300">
                      {item.category}
                    </p>
                  </div>

                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-black/50 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Maximize2 size={14} />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-white"
          >
            <X size={20} />
          </button>

          <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
            />

            <div className="mt-4 text-center">
              <p className="font-black">{selected.title}</p>
              <p className="mt-1 text-xs text-cyan-300">
                {selected.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyGallery() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-cyan-400/20 bg-cyan-400/[0.03] p-12 text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        <Bot size={30} />
      </div>

      <h2 className="mt-6 text-xl font-black">
        Gallery Ready
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        Your gallery system is ready for the company photos. Add the real
        images to the gallery data and they will automatically appear here.
      </p>
    </div>
  );
}