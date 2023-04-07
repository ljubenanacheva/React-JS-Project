import { useState, useEffect, useService, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext.js";
import { useLandmarkContext } from "../../contexts/LandmarkContext.js";

import styles from "./Profile.module.css";
import { LandmarkCardProfile } from "./LandmarkCardProfile/LandmarkCardProfile.js";

export const Profile = () => {
  const [userLandmarks, setuserLandmarks] = useState([]);
  const { getUserLandmarks } = useLandmarkContext();
  const { userId, userEmail, username } = useContext(AuthContext);

  useEffect(() => {
    getUserLandmarks(userId).then((result) => {
      setuserLandmarks(result);
    });
  }, [userId]);

  return (
    <section>
      <h2 className={styles.catalogTitle}>Landmarks of {username}</h2>
      <h1 className={styles.email}>User email: {userEmail}</h1>
      <div className={styles.landMarkDashboard}>
        {userLandmarks.map((x) => (
          <LandmarkCardProfile key={x._id} {...x} />
        ))}
        {userLandmarks.length == 0 && (
          <div>
            <p className={styles.noLandmarks}>No landmarks in dashboard</p>
          </div>
        )}
      </div>
    </section>
  );
};
