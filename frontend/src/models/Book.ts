export type Book = {
  _id: string;
  barcode: string;
  cover: string;
  titile: string;
  authors: string[];
  description: string;
  subjects: string[];
  publicationDate: Date;
  publicher: string;
  pages: number;
  genre: string;
  records: [];
};
