import styles from "./Details.module.css";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { landmarkServiceFactory } from "../../services/landmarkService.js";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useLandmarkContext } from "../../contexts/LandmarkContext.js";
import { useService } from "../../hooks/useService.js";
import { Button } from "react-bootstrap";
import { DeleteConfirmation } from "../DeleteConfirmation/DeleteConfirmation.js";
import { AddComment } from "./AddComment/AddComment.js";
import * as commentService from "../../services/commentService.js";

export const Details = () => {
  const { userId, isAuthenticated, username } = useContext(AuthContext);
  const { landmarkId } = useParams();
  const { deleteLandmark } = useLandmarkContext();
  const [landmark, setLandmark] = useState({});

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const landmarkService = useService(landmarkServiceFactory);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      landmarkService.getOne(landmarkId),
      commentService.getAll(landmarkId),
    ]).then(([landmarkData, commentsData]) => {
      setLandmark({
        ...landmarkData,
        comments: commentsData,
      });
    });
  }, [landmarkId]);

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const onDeleteClick = async () => {
    //eslint-disable-next-line no-restricted-globals
    handleDialog(`Are you sure yoy want to delete ${landmark.name}?`, true);
  };

  const areYouSureDelete = async (choose) => {
    if (choose) {
      await landmarkService.delete(landmark._id);
      deleteLandmark(landmark._id);
      handleDialog("", false);
      navigate("/catalog");
    } else {
      handleDialog("", false);
    }
  };
  const onCommentSubmit = async (values) => {
    const result = await commentService.create(landmarkId, values.comment);
    setLandmark((state) => ({
      ...state,
      comments: [
        ...state.comments,
        {
          ...result,
          author: {
            username: username,
          },
        },
      ],
    }));
  };

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
          {dialog.isLoading && (
            <DeleteConfirmation
              message={dialog.message}
              onDialog={areYouSureDelete}
            />
          )}
          <h6 className={styles.mapTitle}>You could search the place here.</h6>
          <div className={styles.locationDiv}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500843.2714622791!2d24.224396525279392!3d42.71781001236415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2sBulgaria!5e0!3m2!1sen!2sbg!4v1680690901569!5m2!1sen!2sbg"
                width="516"
                height="366"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {landmark._ownerId === userId && (
            <div className={styles.actionBtn}>
              <Link to={`/catalog/${landmark._id}/edit`} className={styles.btn}>
                Edit
              </Link>
              <Button className={styles.btn} onClick={onDeleteClick}>
                Delete
              </Button>
            </div>
          )}
          {isAuthenticated && (
            <>
              <div className={styles.commentsDiv}>
                <h2 className={styles.commentsTitle}>Comments:</h2>
                <ul>
                  {landmark.comments &&
                    landmark.comments.map((x) => (
                      <li key={x._id} className={styles.commentLi}>
                        <p>
                          {x.author.username}: {x.comment}
                        </p>
                      </li>
                    ))}
                </ul>
                {landmark.comments && landmark.comments.length === 0 && (
                  <p className={styles.commentLi}>No comments.</p>
                )}
              </div>

              {isAuthenticated && (
                <AddComment onCommentSubmit={onCommentSubmit} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
