import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchPath({
  pathname,
  pattern,
}: {
  pathname: string;
  pattern: string;
}) {
  // Convert pattern to a regular expression
  // const regex = new RegExp(`^${pattern.replace(/:[^\s/]+/g, '[^/]+')}$`);
  // return regex.test(pathname);
  return pathname.startsWith(pattern);
}

export const generateYearsArray = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1956;
  return Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index,
  );
};

export function formatDate(
  date: Date,
  option?: Intl.DateTimeFormatOptions,
): string {
  const options: Intl.DateTimeFormatOptions = option || {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function camelCaseToSpaces(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}
