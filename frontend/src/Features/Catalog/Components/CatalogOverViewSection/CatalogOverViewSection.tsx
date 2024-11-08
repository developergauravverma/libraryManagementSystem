import { FC, MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../../models/Book";
import { RootState } from "../../../../Redux/ReduxStore";
import Styles from "./Styles.module.css";
import { BookCarousel } from "../../../Book";

const {
  catalogOverviewSection,
  catalogOverviewSectionTop,
  catalogOverviewSectionMore,
} = Styles;

interface CatalogOverViewSectionProp {
  books: Book[];
  label: string;
}

const CatalogOverViewSection: FC<CatalogOverViewSectionProp> = ({
  books,
  label,
}) => {
  const bookState = useSelector((state: RootState) => state.book);
  const navigate = useNavigate();
  const handleViewMore: MouseEventHandler<HTMLParagraphElement> = () => {
    navigate(`/catalog?genre=${label}&subject=${label}`);
  };
  return (
    <div className={catalogOverviewSection}>
      <div className={catalogOverviewSectionTop}>
        <h4>{label}</h4>
        <p className={catalogOverviewSectionMore} onClick={handleViewMore}>
          View More...
        </p>
      </div>
      {books.length > 0 && !bookState.loading && <BookCarousel books={books} />}
    </div>
  );
};

export default CatalogOverViewSection;
