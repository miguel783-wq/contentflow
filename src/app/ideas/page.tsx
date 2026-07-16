import Link from "next/link";

const ideas = [
  {
    id: 1,
    title: "Antes y después de una estrategia de contenido",
    category: "Educativo",
    platform: "Instagram",
    priority: "Alta",
    description:
      "Mostrar cómo cambia una marca cuando pasa de publicar sin plan a tener una estrategia clara.",
  },
  {
    id: 2,
    title: "Errores comunes al crear contenido para redes",
    category: "Carrusel",
    platform: "Instagram",
    priority: "Media",
    description:
      "Una publicación tipo carrusel explicando errores frecuentes y cómo evitarlos.",
  },
  {
    id: 3,
    title: "Mini vlog de producción audiovisual",
    category: "Video corto",
    platform: "TikTok",
    priority: "Alta",
    description:
      "Mostrar detrás de cámaras, preparación, grabación y edición de una pieza audiovisual.",
  },
  {
    id: 4,
    title: "Frase reflexiva sobre creatividad",
    category: "Inspiracional",
    platform: "LinkedIn",
    priority: "Baja",
    description:
      "Contenido breve para conectar con profesionales creativos y comunicadores.",
  },
];

const priorityStyles = {
  Alta: "bg-red-400/10 text-red-300 border-red-400/20",
  Media: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Baja: "bg-green-400/10 text-green-300 border-green-400/20",
};

type Priority = keyof typeof priorityStyles;

export default function IdeasPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              ContentFlow
            </p>

            <h1 className="mt-3 text-3xl font-bold">Banco de ideas</h1>

            <p className="mt-2 text-slate-400">
              Guarda ideas creativas antes de convertirlas en publicaciones.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Inicio
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Dashboard
            </Link>

            <Link
              href="/calendar"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Calendario
            </Link>

            <Link
              href="/posts/new"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Nueva publicación
            </Link>
          </nav>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {ideas.map((idea) => (
            <article
              key={idea.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {idea.category}
                </span>

                <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-cyan-300">
                  {idea.platform}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-sm ${
                    priorityStyles[idea.priority as Priority]
                  }`}
                >
                  Prioridad {idea.priority}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold">{idea.title}</h2>

              <p className="mt-3 text-slate-400">{idea.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Convertir en post
                </button>

                <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
                  Editar idea
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}