export type PostStatus = "Idea" | "Borrador" | "Programado" | "Publicado";

export type PostPlatform =
  | "Instagram"
  | "TikTok"
  | "Facebook"
  | "LinkedIn"
  | "YouTube"
  | "X";

export type Post = {
  id: string;
  title: string;
  platform: PostPlatform;
  content: string;
  date: string;
  time: string;
  status: PostStatus;
  hashtags: string;
  notes: string;
};