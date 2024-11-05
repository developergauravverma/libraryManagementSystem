import mongoose, { Document, Schema } from "mongoose";
import { IBook } from "../models/Book";

export interface IBookModel extends IBook, Document {}

const BookSchema = new Schema<IBookModel>(
  {
    barcode: { type: String, required: true, unique: true },
    cover: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    authors: { type: [String], required: true },
    description: { type: String, required: true },
    subject: { type: [String], required: true },
    publicationDate: { type: Date, required: true },
    publisher: { type: String, required: true },
    pages: { type: Number, required: true },
    genre: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBookModel>("Book", BookSchema);
