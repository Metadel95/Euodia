import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/euodiaworships",
  youtube: "https://youtube.com/@euodiaworships",
  email: "mailto:hello@euodia.worship",
} as const;
