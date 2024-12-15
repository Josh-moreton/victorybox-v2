export interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };
}

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface Product {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  closingDate: string;
  carousel: boolean;
  question: string;
  answer: string[];
  tickets_available: number;
  contest_id: string;
  featured: boolean;
  category: string;
  total_tickets: number;
  Image: Image;
  galleryImages: Image[] | null;
}
