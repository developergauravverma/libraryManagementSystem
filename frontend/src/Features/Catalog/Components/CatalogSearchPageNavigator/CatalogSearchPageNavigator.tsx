import { FC, MouseEvent, MouseEventHandler } from "react";
import styles from "./Styles.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/ReduxStore";
import { useLocation, useNavigate } from "react-router-dom";
import { calculatePaging } from "../../Utils/CatalogUtils";

const {
  catalogSearchPageNavigator,
  catalogSearchPageNavigatorNavigate,
  catalogSearchPageNumbers,
  numberActive,
  catalogSearchPageNumber,
} = styles;

const CatalogSearchPageNavigator: FC = () => {
  const pagingInformation = useSelector(
    (state: RootState) => state.book.pagingInformation
  );

  const navigate = useNavigate();
  const { search } = useLocation();

  const navigatePrevious: MouseEventHandler<HTMLParagraphElement> = () => {
    if (pagingInformation && pagingInformation.currentPage !== 1) {
      if (search.includes("&page=")) {
        let splitString = search.split("&page=");
        let newTerms =
          splitString[0] + `&page=${pagingInformation.currentPage - 1}`;
        navigate(`/catalog${newTerms}`);
      } else {
        let newTerms = search + `&page=${pagingInformation.currentPage - 1}`;
        navigate(`/catalog${newTerms}`);
      }
    }
  };

  const navigateToNumber: MouseEventHandler<HTMLParagraphElement> = (
    e: MouseEvent<HTMLParagraphElement>
  ) => {
    if (search.includes("&page=")) {
      let splitString = search.split("&page=");
      let newTerm = splitString[0] + `&page=${e.currentTarget.id}`;
      navigate(`/catalog${newTerm}`);
    } else {
      let newTerma = search + `&page=${e.currentTarget.id}`;
      navigate(`catalog${newTerma}`);
    }
  };

  const navigateNext: MouseEventHandler<HTMLParagraphElement> = () => {
    if (
      pagingInformation &&
      pagingInformation.currentPage !== pagingInformation.totalPages
    ) {
      if (search.includes("&page=")) {
        let splitString = search.split("&page=");
        let newTerm =
          splitString[0] + `&page=${pagingInformation.currentPage + 1}`;
        navigate(`catalog/${newTerm}`);
      } else {
        let newTerm = search + `&page=${pagingInformation.currentPage + 1}`;
        navigate(`catalog/${newTerm}`);
      }
    }
  };

  return (
    <div className={catalogSearchPageNavigator}>
      <p
        className={catalogSearchPageNavigatorNavigate}
        onClick={navigatePrevious}
      >
        Prev
      </p>
      <div className={catalogSearchPageNumbers}>
        {pagingInformation &&
          calculatePaging(pagingInformation).map((num) => {
            if (num === `${pagingInformation.currentPage}`)
              return (
                <p
                  key={num}
                  className={`${catalogSearchPageNumber} ${numberActive}`}
                >
                  {num}
                </p>
              );
            return (
              <p
                key={num}
                id={num}
                className={catalogSearchPageNumber}
                onClick={navigateToNumber}
              >
                {num}
              </p>
            );
          })}
      </div>
      <p className={catalogSearchPageNavigatorNavigate} onClick={navigateNext}>
        Next
      </p>
    </div>
  );
};

export default CatalogSearchPageNavigator;
