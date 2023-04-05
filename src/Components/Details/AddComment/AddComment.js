import { useForm } from "../../../hooks/useForm.js";

import styles from "../Details.module.css";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );
  return (
    <article className={styles.createComment}>
      <label className={styles.addcommentsTitle}>Add new comment:</label>
      <form className="form" method="POST" onSubmit={onSubmit}>
        <textarea
          className={styles.commentTextarea}
          name="comment"
          value={values.comment}
          onChange={changeHandler}
          placeholder="Comment......"
        ></textarea>
        <button className={styles.addCommentBtn} type="submit">
          Add comment
        </button>
      </form>
    </article>
  );
};
