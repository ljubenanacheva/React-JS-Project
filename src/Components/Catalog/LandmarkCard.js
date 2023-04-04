import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

export const LandmarkCard = ({ _id, name, category, location, imageUrl }) => {
  return (
    <div className={styles.landmarkBoard}>
      <article className="service-img">
        <img className={styles.landmarkImage} src={imageUrl} />
      </article>
      <h2 className={styles.landmakH2}>{name}</h2>
      <h3 className={styles.landmarkH3}>{category}</h3>
      <h5 className={styles.landmarkH5}>{location}</h5>
      <div className={styles.action}>
        <Link className={styles.btn} to={`/catalog/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};
