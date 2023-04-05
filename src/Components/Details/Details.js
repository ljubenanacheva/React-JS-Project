import styles from "./Details.module.css";

export const Details = () => {
  return (
    <>
      <div className={styles.details}>
        <h1 className={styles.name}>Name: Kaliakra Cape</h1>
        <h3 className={styles.category}>Category: Nature</h3>
        <section className={styles.images}>
          <div className="animalPic">
            <img className={styles.img} src="/images/kaliakra.jpg" />
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11802.202065189955!2d27.754781679876636!3d42.309455488176106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6cc14cc840ed5%3A0xefb61d9214cebeb!2sBeglik%20Tash!5e0!3m2!1sen!2sbg!4v1680551829009!5m2!1sen!2sbg"
              width="516"
              height="366"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <div>
          <h4 className={styles.location}>Location: Varna</h4>
          <p className={styles.description}>
            Description: Very intersting place...
          </p>

          {/*<!-- if there is no registered user, do not display div-->*/}
          <div className={styles.actionBtn}>
            {/*<!-- Only for registered user and creator of the pets-->*/}
            <a href="#" className={styles.btn}>
              Edit
            </a>
            <a href="#" className={styles.btn}>
              Delete
            </a>
          </div>

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
        </div>
        <article className={styles.createComment}>
          <label className={styles.addcommentsTitle}>Add new comment:</label>
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
      </div>
    </>
  );
};
