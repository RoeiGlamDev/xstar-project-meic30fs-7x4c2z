import { Product } from './product';
import { User } from './user';

/
 * Represents a GlamCS cosmetics brand with specific attributes.
 * @interface GlamCSBrand
 */
export interface GlamCSBrand {
    name: string; // The name of the brand
    tagline: string; // A catchy tagline for the brand
    colors: { primary: string; secondary: string }; // Brand colors
}

/
 * Represents a product in the GlamCS cosmetics line.
 * @interface GlamCSProduct
 */
export interface GlamCSProduct extends Product {
    id: string; // Unique identifier for the product
    name: string; // Product name
    description: string; // Detailed description of the product
    price: number; // Price of the product
    imageUrl: string; // URL of the product image
    category: string; // Category under which the product falls (e.g., lipstick, foundation)
    inStock: boolean; // Availability status of the product
    luxuryEffect: boolean; // Indicates if the product has luxury 3D effects
}

/
 * Represents a user who interacts with the GlamCS website.
 * @interface GlamCSUser
 */
export interface GlamCSUser extends User {
    id: string; // Unique identifier for the user
    name: string; // User's full name
    email: string; // User's email address
    password: string; // User's password
    favorites: GlamCSProduct[]; // List of favorite products
}

/
 * Represents the overall GlamCS application state.
 * @interface GlamCSState
 */
export interface GlamCSState {
    products: GlamCSProduct[]; // List of products available in the store
    users: GlamCSUser[]; // List of registered users
    brand: GlamCSBrand; // Information about the GlamCS brand
}

/
 * GlamCS Brand instance.
 * @constant {GlamCSBrand}
 */
export const glamCSBrand: GlamCSBrand = {
    name: "GlamCS",
    tagline: "Elevate Your Beauty",
    colors: { primary: "#FFA500", secondary: "#FFFFFF" } // Orange and white colors
};