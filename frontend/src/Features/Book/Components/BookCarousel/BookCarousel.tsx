import { FC, MouseEventHandler, useState } from "react";
import { Book } from "../../../../models/Book";
import Styles from "./Styles.module.css";
import BookCard from "../BookCard/BookCard";

const { bookCarousel, bookCarouselLeftButton, bookCarouselRightButton } =
  Styles;

interface BookCarouselProps {
  books: Book[];
}

const BookCarousel: FC<BookCarouselProps> = ({ books }) => {
  const [order, setOrder] = useState<Book[]>(books);

  const moveLeft: MouseEventHandler<HTMLDivElement> = () => {
    debugger;
    let item = order[0];
    let recordered = order.slice(1, order.length);
    recordered.push(item);
    setOrder(recordered);
  };

  const moveRight: MouseEventHandler<HTMLDivElement> = () => {
    debugger;
    let item = order[order.length - 1];
    let recordered = order.slice(0, order.length - 1);
    recordered = [item, ...recordered];
    setOrder(recordered);
  };

  return (
    <div className={bookCarousel}>
      <div className={bookCarouselLeftButton} onClick={moveLeft}>{`<`}</div>
      <div className={bookCarouselRightButton} onClick={moveRight}>{`>`}</div>
      {order.map((item) => (
        <BookCard key={item.barcode} book={item} />
      ))}
    </div>
  );
};

export default BookCarousel;
