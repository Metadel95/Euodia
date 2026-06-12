import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/euodia_songs/",
  youtube: "https://youtube.com/@euodiaworships",
  email: "mailto:hello@euodia.worship",
} as const;
