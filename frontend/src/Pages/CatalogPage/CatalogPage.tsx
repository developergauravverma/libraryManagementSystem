import { FC } from "react";
import Styles from "./Styles.module.css";
import { useLocation } from "react-router-dom";
import { CatalogOverView, CatalogSearch } from "../../Features/Catalog";

const {} = Styles;

const CatalogPage: FC = () => {
  const location = useLocation();
  return (
    <div className="page">
      <div className="page-container">
        {location.search === "" ? <CatalogOverView /> : <CatalogSearch />}
      </div>
    </div>
  );
};

export default CatalogPage;
