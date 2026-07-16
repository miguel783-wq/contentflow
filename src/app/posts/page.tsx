"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteStoredPost, getStoredPosts } from "@/lib/storage";
import type { Post, PostStatus } from "@/types/post";

const statusStyles: Record<PostStatus, string> = {
  Idea: "bg-purple-400/10 text-purple-300 border-purple-400/20",
  Borrador: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Programado: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  Publicado: "bg-green-400/10 text-green-300 border-green-400/20",
};

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

function formatDate(date: string) {
  if (!date) return "Sin fecha";

  const formattedDate = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("es-BO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(formattedDate);
}

export default function PostsPage() {
  const [storedPosts, setStoredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getStoredPosts();
    setStoredPosts(posts);
  }, []);

  const posts = [...storedPosts, ...demoPosts];

  function handleDeletePost(postId: string) {
    const shouldDelete = window.confirm(
      "¿Seguro que quieres eliminar esta publicación?"
    );

    if (!shouldDelete) {
      return;
    }

    deleteStoredPost(postId);

    setStoredPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              ContentFlow
            </p>

            <h1 className="mt-3 text-3xl font-bold">Publicaciones</h1>

            <p className="mt-2 text-slate-400">
              Gestiona ideas, borradores, contenidos programados y publicaciones
              terminadas.
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

        {storedPosts.length > 0 && (
          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h2 className="font-semibold text-cyan-300">
              Publicaciones guardadas
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Tus publicaciones creadas desde el formulario aparecen primero en
              esta lista.
            </p>
          </div>
        )}

        <section className="mt-8 grid gap-5">
          {posts.map((post) => {
            const isDemoPost = post.id.startsWith("demo");

            return (
              <article
                key={post.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                        {post.platform}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-sm ${
                          statusStyles[post.status]
                        }`}
                      >
                        {post.status}
                      </span>

                      {isDemoPost ? (
                        <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-slate-500">
                          Demo
                        </span>
                      ) : (
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                          Guardado
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold">
                      {post.title}
                    </h2>

                    <p className="mt-3 max-w-3xl text-slate-400">
                      {post.content}
                    </p>

                    {post.hashtags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.hashtags.split(" ").map((tag) => (
                          <span
                            key={`${post.id}-${tag}`}
                            className="rounded-lg bg-slate-950 px-3 py-1 text-sm text-cyan-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {post.notes && (
                      <p className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-400">
                        <span className="font-semibold text-slate-300">
                          Nota interna:
                        </span>{" "}
                        {post.notes}
                      </p>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300 md:min-w-48">
                    <p className="text-slate-500">Fecha</p>
                    <p className="mt-1 font-semibold text-white">
                      {formatDate(post.date)}
                    </p>

                    <p className="mt-4 text-slate-500">Hora</p>
                    <p className="mt-1 font-semibold text-white">
                      {post.time}
                    </p>

                    {!isDemoPost && (
                      <button
                        type="button"
                        onClick={() => handleDeletePost(post.id)}
                        className="mt-5 w-full rounded-lg border border-red-400/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-400/10"
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}