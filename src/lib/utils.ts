import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
    let floorPrice = Math.floor(price);
    if (!floorPrice) return null;
    const formattedPrice = floorPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `₹${formattedPrice}`;
}

export default formatPrice;
