export interface IBook {
  barcode: string;
  cover: string;
  title: string;
  authors: string[];
  description: string;
  subject: string[];
  publicationDate: Date;
  publisher: string;
  pages: number;
  genre: string;
}
