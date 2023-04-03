import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <section className={styles["home-content"]}>
        <article className={styles.homeContentText}>
          <h1 className={styles.title}>Explore Bulgaria</h1>
          <h1 className={styles.titleBold}>Landmarks of Bulgaria</h1>
          <p className={styles.homeContentTextP}>
            You have seen an interesting place. Show it to us...
          </p>
        </article>
        <Carousel fade className={styles.carouselItem}>
          <Carousel.Item>
            <img
              src="./images/phonemap.jpg"
              alt="First slide"
              className={styles.carouselImg}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./images/Belogradchik.jpg"
              alt="Second slide"
              className={styles.carouselImg}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./images/kaliakra.jpg"
              alt="Third slide"
              className={styles.carouselImg}
            />
          </Carousel.Item>
        </Carousel>
        {/* <article className={styles.homeContentImage}>
          <img src="./images/phonemap.jpg" alt="landmark photo" />
        </article> */}
      </section>
    </>
  );
};
