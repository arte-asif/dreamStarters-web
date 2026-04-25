import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getProgram(slug: string) {
  return import("./data").then(({ programs }) =>
    programs.find((program) => program.slug === slug)
  );
}
