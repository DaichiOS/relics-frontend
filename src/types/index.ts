export interface Book {
    id: number;
    title: string;
    author: string;
    coverImage?: string;
    description?: string;
    publishedYear?: number;
    rating?: number;
}