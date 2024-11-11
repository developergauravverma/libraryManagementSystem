import { FC, useEffect } from "react";
import styles from "./Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { useLocation } from "react-router-dom";
import { queryBooks } from "../../../../Redux/Slice/BookSlice";
import { BookCard } from "../../../Book";
import CatalogAdvanceSearch from "../CatalogAdvanceSearch/CatalogAdvanceSearch";

const {
  catalogSearch,
  catalogSearchAdvanceSearchSection,
  catalogSearchItemArea,
  catalogSearchPages,
} = styles;

const CatalogSearch: FC = () => {
  const bookState = useSelector((state: RootState) => state.book);
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(queryBooks(location.search));
  }, [location.search]);
  return (
    <div className={catalogSearch}>
      <div className={catalogSearchAdvanceSearchSection}>
        <CatalogAdvanceSearch />
      </div>
      {!bookState.loading ? (
        <>
          <h2>
            Displaying {bookState.pagingInformation?.pageCount} books out of{" "}
            {bookState.pagingInformation?.totalCount}
          </h2>
          <div className={catalogSearchItemArea}>
            {bookState.books.map((book) => (
              <BookCard key={book.barcode} book={book} />
            ))}
          </div>
          <div className={catalogSearchPages}></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CatalogSearch;
