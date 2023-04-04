import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

export const Catalog = () => {
  return (
    <section>
      <h2 className={styles.catalogTitle}>Landmarks of Bulgaria</h2>
      <div className={styles.landMarkDashboard}>
        <div className={styles.landmarkBoard}>
          <article className="service-img">
            <img className={styles.landmarkImage} src="./images/kaliakra.jpg" />
          </article>
          <h2 className={styles.landmakH2}>Kaliakra Cape</h2>
          <h3 className={styles.landmarkH3}>Nature</h3>
          <h5 className={styles.landmarkH5}>Kaliakra</h5>
          <div className={styles.action}>
            <Link className={styles.btn} to="#">
              Details
            </Link>
          </div>
        </div>
        {/*<div>
          <p className={styles.noLandmarks}>No landmarks in dashboard</p>
  </div>*/}
      </div>
    </section>
  );
};
