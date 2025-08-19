import { useState } from 'react';

/
 * Utility functions for GlamCS application
 * This file contains helper functions and formatters specific to the GlamCS cosmetics brand.
 */

// Define GlamCS-specific types and interfaces
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    isLoggedIn: boolean;
}

/
 * cn-function
 * A utility to conditionally join class names together.
 *
 * @param classNames - An array of class names to be conditionally joined.
 * @returns A single string with all valid class names.
 */
export const cn = (...classNames: string[]): string => {
    return classNames.filter(Boolean).join(' ');
};

/
 * formatCurrency
 * Formats a number as a currency string specific to the cosmetics industry.
 *
 * @param amount - The amount to format.
 * @returns A string representing the formatted currency.
 */
export const formatCurrency = (amount: number): string => {
    return $${amount.toFixed(2)};
};

/
 * formatProductDescription
 * Formats and sanitizes the product description for display on the GlamCS website.
 *
 * @param description - The raw product description.
 * @returns A sanitized and styled string for display.
 */
export const formatProductDescription = (description: string): string => {
    return description.trim().replace(/\n/g, '<br />');
};

/
 * useProductFilter
 * A custom hook for filtering products based on categories, prices, and other criteria.
 *
 * @param products - An array of products to filter.
 * @param criteria - The criteria for filtering products.
 * @returns An array of filtered products.
 */
export const useProductFilter = (products: Product[], criteria: any): Product[] => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    // Implement filtering logic based on criteria
    // Example: Filter by category
    if (criteria.category) {
        setFilteredProducts(products.filter(product => product.category === criteria.category));
    }

    return filteredProducts;
};

/
 * getGlamCSWelcomeMessage
 * Returns a welcome message for users visiting the GlamCS website.
 *
 * @returns A string containing the welcome message.
 */
export const getGlamCSWelcomeMessage = (): string => {
    return "Welcome to GlamCS - Your ultimate destination for luxury cosmetics!";
};