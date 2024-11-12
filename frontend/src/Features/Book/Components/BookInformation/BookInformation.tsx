import { FC } from "react";
import Styles from "./Styles.module.css";
import { Book } from "../../../../models/Book";
import { mapAuthorsToString } from "../../Utils/BookUtils";

const { bookInfo, bookInfoContainer, bookInfoCover } = Styles;

interface BookInfoProps {
  book: Book;
}

const BookInformation: FC<BookInfoProps> = ({ book }) => {
  return (
    <div className={bookInfo}>
      <div className={bookInfoContainer}>
        <img className={bookInfoCover} src={book.cover} />
        <div className="">
          <h2>{book.title}</h2>
          <h3>{mapAuthorsToString(book)}</h3>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
