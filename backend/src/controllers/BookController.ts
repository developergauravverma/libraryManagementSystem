import { Request, Response } from "express";
import {
  findAllBooks,
  modifyBook,
  registerBook,
  removeBook,
} from "../services/BookServices";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    let book = await findAllBooks();
    res
      .status(200)
      .json({ message: "Retrive all books", count: book.length, book });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Unable to retrive  books", error: error.message });
  }
};
const createBook = async (req: Request, res: Response) => {
  try {
    let book = req.body;
    let saveBook = await registerBook(book);
    res.status(201).json({ message: "Book created successfully", saveBook });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to save this book at this time",
      error: error.message,
    });
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    let book = req.body;
    let updateBook = await modifyBook(book);
    res.status(202).json({ message: "Book updated successfully.", updateBook });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to update this book at this time",
      error: error.message,
    });
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    let { barcode } = req.params;
    let message = await removeBook(barcode);
    res.status(202).json({ message });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to delete this book at this time",
      error: error.message,
    });
  }
};

export default { getAllBooks, createBook, updateBook, deleteBook };
