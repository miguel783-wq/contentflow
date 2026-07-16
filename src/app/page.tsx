import Link from "next/link";

const sections = [
  {
    title: "Dashboard",
    description: "Visualiza estadísticas, publicaciones próximas y flujo de trabajo.",
    href: "/dashboard",
  },
  {
    title: "Publicaciones",
    description: "Gestiona ideas, borradores, contenidos programados y publicados.",
    href: "/posts",
  },
  {
    title: "Calendario",
    description: "Organiza el contenido por fecha dentro de un calendario editorial.",
    href: "/calendar",
  },
  {
    title: "Ideas",
    description: "Guarda conceptos creativos antes de convertirlos en publicaciones.",
    href: "/ideas",
  },
];

const features = [
  "Gestión de publicaciones",
  "Estados de contenido",
  "Calendario editorial",
  "Banco de ideas",
  "Dashboard dinámico",
  "Almacenamiento local",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              ContentFlow
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Social Media Content Manager
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Abrir app
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Proyecto para portafolio
            </span>

            <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Organiza, planifica y controla tu contenido para redes sociales.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              ContentFlow es una aplicación web para gestionar publicaciones,
              guardar ideas creativas, visualizar un calendario editorial y
              controlar el flujo de trabajo de contenido digital.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/posts/new"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Crear publicación
              </Link>

              <Link
                href="/posts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
              >
                Ver publicaciones
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Resumen</p>
                  <h2 className="mt-1 text-2xl font-bold">Flujo semanal</h2>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  Activo
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Instagram</p>
                  <h3 className="mt-1 font-semibold">
                    Carrusel educativo programado
                  </h3>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">TikTok</p>
                  <h3 className="mt-1 font-semibold">
                    Video corto en borrador
                  </h3>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <h3 className="mt-1 font-semibold">
                    Idea creativa guardada
                  </h3>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="grid gap-5 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {section.description}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}