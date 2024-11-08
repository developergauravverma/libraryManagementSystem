import BookDao, { IBookModel } from "../daos/BookDao";
import { IBook } from "../models/Book";
import { IPagination } from "../models/Pagination";

export const findAllBooks = async (): Promise<IBookModel[]> => {
  try {
    return await BookDao.find();
  } catch (error: any) {
    throw new Error(`Error in findAllBooks service error: ${error.message}`);
  }
};

export const modifyBook = async (book: IBookModel): Promise<IBookModel> => {
  try {
    let id = await BookDao.findOneAndUpdate({ barcode: book.barcode }, book, {
      new: true,
    });
    if (id) return book;
    throw new Error("Item dose not exist.");
  } catch (error: any) {
    throw new Error(`Error in modifyBook service error: ${error.message}`);
  }
};

export const registerBook = async (book: IBook): Promise<IBookModel> => {
  try {
    const saveBook = new BookDao(book);
    return await saveBook.save();
  } catch (error: any) {
    throw new Error(`Error in registerBook service error: ${error.message}`);
  }
};

export const removeBook = async (barcode: string): Promise<string> => {
  try {
    let id = await BookDao.findOneAndDelete({ barcode });
    if (id) return "Successfully deleted book.";
    throw new Error("Book dose not exists.");
  } catch (error: any) {
    throw new Error(`Error in removeBook service error: ${error.message}`);
  }
};

export const queryBooks = async (
  page: number,
  limit: number,
  title?: string,
  barcode?: string,
  description?: string,
  author?: string,
  subject?: string,
  genre?: string
): Promise<IPagination<IBookModel>> => {
  try {
    let books: IBookModel[] = await BookDao.find();
    let filteredBooks: IBookModel[] = [];
    books.forEach((book) => {
      if (barcode) {
        if (
          book.barcode.toLowerCase().includes(barcode?.toLowerCase()) &&
          !filteredBooks.some((b) => b["barcode"] === book.barcode)
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
      if (title) {
        if (
          book.title.toLowerCase().includes(title?.toLowerCase()) &&
          !filteredBooks.some((b) => b["barcode"] === book.barcode)
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
      if (description) {
        if (
          book.description.toLowerCase().includes(description?.toLowerCase()) &&
          !filteredBooks.some((b) => b["barcode"] === book.barcode)
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
      if (author) {
        if (
          book.authors.some(
            (a) =>
              a.toLowerCase().includes(author.toLowerCase()) &&
              !filteredBooks.some((b) => b["barcode"] === book.barcode)
          )
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
      if (subject) {
        if (
          book.subject.some((b) =>
            b.toLowerCase().includes(subject.toLowerCase())
          ) &&
          !filteredBooks.some((b) => b["barcode"] === book.barcode)
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
      if (genre) {
        if (
          book.genre.toLowerCase() === genre.toLowerCase() &&
          !filteredBooks.some((b) => b["barcode"] === book.barcode)
        ) {
          filteredBooks = [...filteredBooks, book];
        }
      }
    });
    return paginateBooks(filteredBooks, page, limit);
  } catch (error: any) {
    throw new Error(`Error in queryBooks service error: ${error.message}`);
  }
};

export const paginateBooks = (
  books: IBookModel[],
  page: number,
  limit: number
): Promise<IPagination<IBookModel>> => {
  try {
    let pageBooks: IBookModel[] = [];
    const pages = Math.ceil(books.length / Number(limit));
    if (Number(page) === pages) {
      const startPoint = (Number(page) - 1) * Number(limit);
      pageBooks = books.slice(startPoint);
    } else {
      const startPoint = (Number(page) - 1) * Number(limit);
      const endPoint = startPoint + Number(limit);
      pageBooks = books.slice(startPoint, endPoint);
    }
    const pageObject: IPagination<IBookModel> = {
      totalCount: books.length,
      currentPage: Number(page),
      totalPages: pages,
      limit: Number(limit),
      pageCount: pageBooks.length,
      items: books,
    };
    return Promise.resolve(pageObject);
  } catch (error: any) {
    throw new Error(`Error in paginateBooks service error: ${error.message}`);
  }
};
