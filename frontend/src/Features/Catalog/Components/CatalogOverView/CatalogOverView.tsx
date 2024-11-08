import { useDispatch, useSelector } from "react-redux";
import Styles from "./Styles.module.css";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../../../../Redux/Slice/BookSlice";
import {
  generateRandomGenres,
  getRandomBooksByGenre,
} from "../../Utils/CatalogUtils";
import CatalogOverViewSection from "../CatalogOverViewSection/CatalogOverViewSection";
import { Label } from "@mui/icons-material";

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
          {genres.map((genre) => {
            return (
              <CatalogOverViewSection
                key={genre}
                books={getRandomBooksByGenre(genre, bookState.books)}
                label={genre}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CatalogOverView;
