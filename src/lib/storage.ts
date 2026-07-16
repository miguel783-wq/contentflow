import type { Post } from "@/types/post";

const POSTS_STORAGE_KEY = "contentflow_posts";

export function getStoredPosts(): Post[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedPosts = window.localStorage.getItem(POSTS_STORAGE_KEY);

  if (!storedPosts) {
    return [];
  }

  try {
    return JSON.parse(storedPosts) as Post[];
  } catch {
    return [];
  }
}

export function savePost(post: Post) {
  const currentPosts = getStoredPosts();
  const updatedPosts = [post, ...currentPosts];

  window.localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
}

export function deleteStoredPost(postId: string) {
  const currentPosts = getStoredPosts();
  const updatedPosts = currentPosts.filter((post) => post.id !== postId);

  window.localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
}