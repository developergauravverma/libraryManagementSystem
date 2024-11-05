import { Book } from "../../../../models/Book";
import { BookInformation } from "../../../Book";
import Styles from "./Styles.module.css";

const { bookOfTheWeek } = Styles;

const book: Book = {
  _id: "1234",
  barcode: "12345",
  cover: "https://cdn.pixabay.com/photo/2024/06/16/15/23/book-8833643_1280.jpg",
  title: "node js",
  authors: ["gaurav", "garvit"],
  description:
    "description description description description description description description description description description description descriptiondescription ",
  subjects: ["node", "JS", "JavaScript"],
  publicationDate: new Date("2020-01-01"),
  publisher: "some publisher",
  pages: 200,
  genre: "Non-Fiction",
  records: [],
};

const BookOfTheWeek = () => {
  return (
    <div className={bookOfTheWeek}>
      <h1>Book of the Week:</h1>
      <BookInformation book={book} />
    </div>
  );
};

export default BookOfTheWeek;
