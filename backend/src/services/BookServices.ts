import BookDao, { IBookModel } from "../daos/BookDao";
import { IBook } from "../models/Book";

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
