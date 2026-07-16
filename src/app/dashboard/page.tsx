"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredPosts } from "@/lib/storage";
import type { Post, PostStatus } from "@/types/post";

const demoPosts: Post[] = [
  {
    id: "demo-1",
    title: "Carrusel educativo sobre marca personal",
    platform: "Instagram",
    date: "2026-07-18",
    time: "19:00",
    status: "Programado",
    content:
      "Contenido educativo para explicar cómo construir una identidad digital coherente.",
    hashtags: "#MarcaPersonal #ContenidoDigital #RedesSociales",
    notes: "Diseñar como carrusel de 5 slides.",
  },
  {
    id: "demo-2",
    title: "Video corto con tendencia de TikTok",
    platform: "TikTok",
    date: "2026-07-20",
    time: "21:30",
    status: "Borrador",
    content:
      "Idea de video dinámico usando una tendencia actual para aumentar alcance.",
    hashtags: "#TikTokMarketing #Trends #ContentFlow",
    notes: "Buscar audio en tendencia.",
  },
  {
    id: "demo-3",
    title: "Post de lanzamiento de campaña",
    platform: "Facebook",
    date: "2026-07-22",
    time: "10:00",
    status: "Idea",
    content:
      "Publicación inicial para presentar una nueva campaña de comunicación digital.",
    hashtags: "#CampañaDigital #Marketing #SocialMedia",
    notes: "Definir imagen principal.",
  },
];

const statusStyles: Record<PostStatus, string> = {
  Idea: "bg-purple-400/10 text-purple-300",
  Borrador: "bg-yellow-400/10 text-yellow-300",
  Programado: "bg-cyan-400/10 text-cyan-300",
  Publicado: "bg-green-400/10 text-green-300",
};

function formatDate(date: string) {
  if (!date) return "Sin fecha";

  const formattedDate = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("es-BO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(formattedDate);
}

export default function DashboardPage() {
  const [storedPosts, setStoredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getStoredPosts();
    setStoredPosts(posts);
  }, []);

  const posts = [...storedPosts, ...demoPosts];

  const totalPosts = posts.length;
  const scheduledPosts = posts.filter(
    (post) => post.status === "Programado"
  ).length;
  const draftPosts = posts.filter((post) => post.status === "Borrador").length;
  const publishedPosts = posts.filter(
    (post) => post.status === "Publicado"
  ).length;
  const ideaPosts = posts.filter((post) => post.status === "Idea").length;

  const upcomingPosts = posts
    .filter((post) => post.status !== "Publicado")
    .slice(0, 4);

  const stats = [
    {
      title: "Publicaciones totales",
      value: totalPosts,
      description: "Contenido registrado en ContentFlow",
    },
    {
      title: "Programadas",
      value: scheduledPosts,
      description: "Listas para publicarse",
    },
    {
      title: "En borrador",
      value: draftPosts,
      description: "Pendientes de revisión",
    },
    {
      title: "Publicadas",
      value: publishedPosts,
      description: "Ya salieron en redes",
    },
  ];

  const ideaPercentage = totalPosts ? Math.round((ideaPosts / totalPosts) * 100) : 0;
  const draftPercentage = totalPosts
    ? Math.round((draftPosts / totalPosts) * 100)
    : 0;
  const publishedPercentage = totalPosts
    ? Math.round((publishedPosts / totalPosts) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              ContentFlow
            </p>

            <h1 className="mt-3 text-3xl font-bold">Dashboard</h1>

            <p className="mt-2 text-slate-400">
              Resumen general del flujo de contenido para redes sociales.
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
              href="/posts"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Publicaciones
            </Link>

            <Link
              href="/calendar"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Calendario
            </Link>

            <Link
              href="/ideas"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Ideas
            </Link>

            <Link
              href="/posts/new"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Nueva publicación
            </Link>
          </nav>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm text-slate-400">{item.title}</p>
              <h2 className="mt-3 text-3xl font-bold">{item.value}</h2>
              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold">Próximas publicaciones</h2>

            <div className="mt-6 space-y-4">
              {upcomingPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {post.platform} · {formatDate(post.date)} · {post.time}
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-sm ${
                        statusStyles[post.status]
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold">Flujo de trabajo</h2>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Ideas</span>
                  <span>{ideaPercentage}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{ width: `${ideaPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>Borradores</span>
                  <span>{draftPercentage}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{ width: `${draftPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>Publicadas</span>
                  <span>{publishedPercentage}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{ width: `${publishedPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}