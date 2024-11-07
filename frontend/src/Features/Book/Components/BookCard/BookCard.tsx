import { FC } from "react";
import { Book } from "../../../../models/Book";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";
import { mapAuthorsToString } from "../../Utils/BookUtils";

const {
  bookCard,
  bookCardCover,
  bookCardInfo,
  bookCardTitle,
  bookCardAuthor,
  bookCardDescription,
} = Styles;

interface BookCardProps {
  book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  const displayBook = () => {
    navigate(`/resource/${book.barcode}`);
  };

  return (
    <div id={bookCard} className={bookCard}>
      <img className={bookCardCover} src={book.cover} />
      <div className={bookCardInfo}>
        <h1 className={bookCardTitle}>{book.title}</h1>
        <h3 className={bookCardAuthor}>{mapAuthorsToString(book)}</h3>
        <p className={bookCardDescription}>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
