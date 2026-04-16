import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[] | unknown[]) {
  return twMerge(clsx(inputs));
}
