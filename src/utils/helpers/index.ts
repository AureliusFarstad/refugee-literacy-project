import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./array";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
