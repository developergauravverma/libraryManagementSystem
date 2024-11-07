import { useDispatch, useSelector } from "react-redux";
import Styles from "./Styles.module.css";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../../../../Redux/Slice/BookSlice";
import { generateRandomGenres } from "../../Utils/CatalogUtils";

const { catalogOverview } = Styles;

const CatalogOverView = () => {
  const bookState = useSelector((state: RootState) => state.book);
  const dispatch: AppDispatch = useDispatch();

  const [genres, setGenres] = useState<string[]>(() => {
    return generateRandomGenres();
  });

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return (
    <>
      {bookState.books.length > 0 && !bookState.loading ? (
        <div className={catalogOverview}>
          <h2>
            Welcome To Our Library, We Currently have{" "}
            {bookState.books && bookState.books.length} books.
          </h2>
          <h4>
            Browse our selected books below, or search from something use the
            top navigaion bar.
          </h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CatalogOverView;
