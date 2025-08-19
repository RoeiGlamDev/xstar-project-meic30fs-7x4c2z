export const BRAND_NAME = "GlamCS";

export const COLORS = {
  PRIMARY: "#FFA500", // Orange
  SECONDARY: "#FFFFFF", // White
};

export const FONTS = {
  BODY: "'Helvetica Neue', Arial, sans-serif",
  HEADINGS: "'Garamond', serif",
};

export const DIMENSIONS = {
  MAX_WIDTH: "1200px",
  HEADER_HEIGHT: "80px",
  FOOTER_HEIGHT: "60px",
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Lipsticks",
    description: "Luxurious lip colors for every occasion.",
    products: [],
  },
  {
    id: "2",
    name: "Foundations",
    description: "Flawless coverage for a perfect complexion.",
    products: [],
  },
  {
    id: "3",
    name: "Skincare",
    description: "Nourishing products for radiant skin.",
    products: [],
  },
];

export const CONFIG = {
  API_URL: "https://api.glamcs.com/v1",
  SUPPORT_EMAIL: "support@glamcs.com",
  SOCIAL_MEDIA: {
    instagram: "https://instagram.com/glamcs",
    facebook: "https://facebook.com/glamcs",
    twitter: "https://twitter.com/glamcs",
  },
};

/
 * GlamCS Constants and Configuration
 * This file contains all the constants and configurations for the GlamCS cosmetics website.
 * It defines the brand name, color scheme, font styles, and business-specific logic for products and categories.
 */