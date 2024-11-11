import { FC, MouseEvent, MouseEventHandler, useRef } from "react";
import styles from "./Styles.module.css";
import { useNavigate } from "react-router-dom";

const {
  catalogAdvanceSearch,
  catalogAdvanceSearchForm,
  catalogAdvanceFormInputGroup,
  catalogAdvanceFormInput,
  catalogAdvanceSearchButton,
} = styles;

const CatalogAdvanceSearch: FC = () => {
  const navigate = useNavigate();
  const isbnRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);

  const search: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    let query = "";
    if (isbnRef && isbnRef.current && isbnRef.current.value !== "")
      query += `?barcode=${isbnRef.current.value}`;
    if (titleRef && titleRef.current && titleRef.current.value !== "") {
      query +=
        query === ""
          ? `?title=${titleRef.current.value}`
          : `&title=${titleRef.current.value}`;
    }
    if (authorRef && authorRef.current && authorRef.current.value !== "") {
      query +=
        query === ""
          ? `?author=${authorRef.current.value}`
          : `&author=${authorRef.current.value}`;
    }
    if (
      descriptionRef &&
      descriptionRef.current &&
      descriptionRef.current.value !== ""
    ) {
      query +=
        query === ""
          ? `?description=${descriptionRef.current.value}`
          : `&description=${descriptionRef.current.value}`;
    }
    if (subjectRef && subjectRef.current && subjectRef.current.value !== "") {
      query +=
        query === ""
          ? `?subject=${subjectRef.current.value}`
          : `&subject=${subjectRef.current.value}`;
    }
    if (genreRef && genreRef.current && genreRef.current.value !== "") {
      query +=
        query === ""
          ? `?genre=${genreRef.current.value}`
          : `&genre=${genreRef.current.value}`;
    }
    navigate(`/catalog${query}`);
  };

  return (
    <div className={catalogAdvanceSearch}>
      <h2>Advanced Book Search</h2>
      <p>Fill in as many or little fields to narrow down your search results</p>
      <form className={catalogAdvanceSearchForm}>
        <div className={catalogAdvanceFormInputGroup}>
          <p>ISBN</p>
          <input
            id="isbn"
            className={catalogAdvanceFormInput}
            ref={isbnRef}
            placeholder="ISBN"
          />
        </div>
        <div className={catalogAdvanceFormInputGroup}>
          <p>Title</p>
          <input
            id="title"
            className={catalogAdvanceFormInput}
            ref={titleRef}
            placeholder="Title"
          />
        </div>
        <div className={catalogAdvanceFormInputGroup}>
          <p>Author</p>
          <input
            id="author"
            className={catalogAdvanceFormInput}
            ref={authorRef}
            placeholder="author"
          />
        </div>
        <div className={catalogAdvanceFormInputGroup}>
          <p>Description</p>
          <input
            id="description"
            className={catalogAdvanceFormInput}
            ref={descriptionRef}
            placeholder="Description"
          />
        </div>
        <div className={catalogAdvanceFormInputGroup}>
          <p>Subject</p>
          <input
            id="subject"
            className={catalogAdvanceFormInput}
            ref={subjectRef}
            placeholder="Subject"
          />
        </div>
        <div className={catalogAdvanceFormInputGroup}>
          <p>Genre</p>
          <input
            id="genre"
            className={catalogAdvanceFormInput}
            ref={genreRef}
            placeholder="Genre"
          />
        </div>
      </form>
      <button className={catalogAdvanceSearchButton} onClick={search}>
        Search
      </button>
    </div>
  );
};

export default CatalogAdvanceSearch;
