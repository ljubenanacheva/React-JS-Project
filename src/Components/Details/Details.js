import styles from "./Details.module.css";

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { landmarkServiceFactory } from "../../services/landmarkService.js";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useLandmarkContext } from "../../contexts/LandmarkContext.js";
import { useService } from "../../hooks/useService.js";

export const Details = () => {
  const { userId, isAuthenticated } = useContext(AuthContext);

  const { landmarkId } = useParams();
  const [landmark, setLandmark] = useState({});

  const landmarkService = useService(landmarkServiceFactory);

  const navigate = useNavigate();

  useEffect(() => {
    landmarkService.getOne(landmarkId).then((landmarkData) => {
      setLandmark(landmarkData);
    });
  }, [landmarkId]);

  return (
    <>
      <div className={styles.details}>
        <h1 className={styles.name}>Name: {landmark.name}</h1>
        <h3 className={styles.category}>Category: {landmark.category}</h3>
        <section className={styles.images}>
          <div className="animalPic">
            <img className={styles.img} src={landmark.imageUrl} />
          </div>
        </section>
        <div>
          <h4 className={styles.location}>Location: {landmark.location}</h4>
          <p className={styles.description}>
            Description: {landmark.description}
          </p>
          <h6 className={styles.mapTitle}>You could search the place here.</h6>
          <div className={styles.locationDiv}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500843.2714622791!2d24.224396525279392!3d42.71781001236415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2sBulgaria!5e0!3m2!1sen!2sbg!4v1680690901569!5m2!1sen!2sbg"
                width="516"
                height="366"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {landmark._ownerId === userId && (
            <div className={styles.actionBtn}>
              <Link to={`/catalog/${landmark._id}/edit`} className={styles.btn}>
                Edit
              </Link>
              <Link to="#" className={styles.btn}>
                Delete
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <>
              <div className={styles.commentsDiv}>
                <h2 className={styles.commentsTitle}>Comments:</h2>
                <ul>
                  {/*<!-- list all comments for current game (If any) -->*/}
                  <li className={styles.commentLi}>
                    <p>Content: I rate this one quite highly.</p>
                  </li>
                  <li className="comment">
                    <p>Content: The best game.</p>
                  </li>
                </ul>
                {/*<!-- Display paragraph: If there are no games in the database -->*/}
                <p className={styles.commentLi}>No comments.</p>
              </div>
              <article className={styles.createComment}>
                <label className={styles.addcommentsTitle}>
                  Add new comment:
                </label>
                <form className="form">
                  <textarea
                    className={styles.commentTextarea}
                    name="comment"
                    placeholder="Comment......"
                  ></textarea>
                  <button className={styles.addCommentBtn} type="submit">
                    Add comment
                  </button>
                </form>
              </article>
            </>
          )}
        </div>
      </div>
    </>
  );
};
