import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface Item {
  name: string;
  weight: number;
}

export const aggregateWeights = (items: Item[]): Item[] => {
  const aggregatedItems: { [key: string]: number } = {};

  for (const item of items) {
    const { name, weight } = item;
    if (aggregatedItems[name]) {
      aggregatedItems[name] += Number(weight);
    } else {
      aggregatedItems[name] = Number(weight);
    }
  }

  return Object.entries(aggregatedItems).map(([name, weight]) => ({ name, weight }));
};