import style from "./Catalog.module.css";

export const LandmarkCard = () => {
  return (
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
  );
};
