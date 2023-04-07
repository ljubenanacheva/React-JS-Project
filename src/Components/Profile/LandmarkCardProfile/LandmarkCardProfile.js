import styles from "../Profile.module.css";

export const LandmarkCardProfile = ({
  _id,
  name,
  category,
  location,
  imageUrl,
}) => {
  return (
    <div className={styles.landmarkBoard}>
      <article className="service-img">
        <img className={styles.landmarkImage} src={imageUrl} />
      </article>
      <h2 className={styles.landmakH2}>{name}</h2>
      <h3 className={styles.landmarkH3}>{category}</h3>
      <h5 className={styles.landmarkH5}>{location}</h5>
    </div>
  );
};
