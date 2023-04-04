import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import { LandmarkCard } from "./LandmarkCard.js";
import { useLandmarkContext } from "../../contexts/LandmarkContext.js";

export const Catalog = () => {
  const { landmarks } = useLandmarkContext();

  return (
    <section>
      <h2 className={styles.catalogTitle}>Landmarks of Bulgaria</h2>
      <div className={styles.landMarkDashboard}>
        {landmarks.map((x) => (
          <LandmarkCard key={x._id} {...x} />
        ))}
        {landmarks.length == 0 && (
          <div>
            <p className={styles.noLandmarks}>No landmarks in dashboard</p>
          </div>
        )}
      </div>
    </section>
  );
};
