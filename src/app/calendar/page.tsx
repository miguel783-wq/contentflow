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
  Idea: "border-purple-400/20 bg-purple-400/10 text-purple-300",
  Borrador: "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
  Programado: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  Publicado: "border-green-400/20 bg-green-400/10 text-green-300",
};

function formatDate(date: string) {
  const formattedDate = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("es-BO", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(formattedDate);
}

function groupPostsByDate(posts: Post[]) {
  const sortedPosts = [...posts].sort((a, b) => {
    const firstDate = new Date(`${a.date}T${a.time || "00:00"}`).getTime();
    const secondDate = new Date(`${b.date}T${b.time || "00:00"}`).getTime();

    return firstDate - secondDate;
  });

  const groupedPosts = sortedPosts.reduce<Record<string, Post[]>>(
    (groups, post) => {
      if (!groups[post.date]) {
        groups[post.date] = [];
      }

      groups[post.date].push(post);
      return groups;
    },
    {}
  );

  return Object.entries(groupedPosts).map(([date, posts]) => ({
    date,
    posts,
  }));
}

export default function CalendarPage() {
  const [storedPosts, setStoredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getStoredPosts();
    setStoredPosts(posts);
  }, []);

  const posts = [...storedPosts, ...demoPosts];
  const groupedPosts = groupPostsByDate(posts);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              ContentFlow
            </p>

            <h1 className="mt-3 text-3xl font-bold">Calendario editorial</h1>

            <p className="mt-2 text-slate-400">
              Visualiza tus publicaciones organizadas por fecha, plataforma y
              estado.
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
              href="/posts"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Publicaciones
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

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Plan editorial</h2>
              <p className="mt-1 text-sm text-slate-400">
                Tus publicaciones aparecen agrupadas por fecha.
              </p>
            </div>

            <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              {posts.length} publicaciones
            </span>
          </div>

          <div className="mt-6 grid gap-5">
            {groupedPosts.map((group) => (
              <article
                key={group.date}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex flex-col gap-2 border-b border-slate-800 pb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      {formatDate(group.date)}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {group.posts.length} publicación
                      {group.posts.length > 1 ? "es" : ""}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {group.posts.map((post) => {
                    const isDemoPost = post.id.startsWith("demo");

                    return (
                      <div
                        key={post.id}
                        className={`rounded-xl border p-4 ${
                          statusStyles[post.status]
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-slate-950/60 px-3 py-1 text-xs">
                            {post.platform}
                          </span>

                          <span className="rounded-full bg-slate-950/60 px-3 py-1 text-xs">
                            {post.status}
                          </span>

                          <span className="rounded-full bg-slate-950/60 px-3 py-1 text-xs">
                            {isDemoPost ? "Demo" : "Guardado"}
                          </span>
                        </div>

                        <h4 className="mt-4 font-semibold">{post.title}</h4>

                        <p className="mt-2 text-sm opacity-80">
                          Hora: {post.time}
                        </p>

                        <p className="mt-3 line-clamp-2 text-sm opacity-80">
                          {post.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}