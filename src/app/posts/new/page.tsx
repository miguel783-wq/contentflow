"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { savePost } from "@/lib/storage";
import type { Post, PostPlatform, PostStatus } from "@/types/post";

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState<PostPlatform>("Instagram");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<PostStatus>("Idea");
  const [hashtags, setHashtags] = useState("");
  const [notes, setNotes] = useState("");

  function handleSavePost() {
    if (!title.trim() || !content.trim() || !date || !time) {
      alert("Completa título, copy, fecha y hora antes de guardar.");
      return;
    }

    const newPost: Post = {
      id: crypto.randomUUID(),
      title,
      platform,
      content,
      date,
      time,
      status,
      hashtags,
      notes,
    };

    savePost(newPost);

    alert("Publicación guardada correctamente.");
    router.push("/posts");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="border-b border-slate-800 pb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            ContentFlow
          </p>

          <h1 className="mt-3 text-3xl font-bold">Nueva publicación</h1>

          <p className="mt-2 text-slate-400">
            Crea y organiza una pieza de contenido para tus redes sociales.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/posts"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Volver a publicaciones
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
            >
              Ir al dashboard
            </Link>
          </div>
        </header>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Título del contenido
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ej: Carrusel sobre marca personal"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Plataforma
                </label>
                <select
                  value={platform}
                  onChange={(event) =>
                    setPlatform(event.target.value as PostPlatform)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                >
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                  <option>YouTube</option>
                  <option>X</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Copy de la publicación
              </label>
              <textarea
                rows={6}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Escribe aquí el texto principal de la publicación..."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Fecha
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Hora
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Estado
                </label>
                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as PostStatus)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                >
                  <option>Idea</option>
                  <option>Borrador</option>
                  <option>Programado</option>
                  <option>Publicado</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Hashtags
              </label>
              <input
                type="text"
                value={hashtags}
                onChange={(event) => setHashtags(event.target.value)}
                placeholder="#Marketing #RedesSociales #ContentFlow"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Notas internas
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Agrega observaciones, ideas visuales o pendientes..."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/posts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
              >
                Cancelar
              </Link>

              <button
                type="button"
                onClick={handleSavePost}
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Guardar publicación
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}