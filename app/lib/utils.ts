import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatNumber(number: number): string {
  const formattedNumber = Number(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
}
