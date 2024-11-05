import { Book } from "../../../models/Book";

export const mapAuthorsToString = (book: Book) => {
  let authors: string = "";
  for (let author of book.authors) {
    authors += author;
    authors += ", ";
  }
  return authors.slice(0, authors.length - 2);
};
