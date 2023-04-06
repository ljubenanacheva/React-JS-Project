import { useParams, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { useLandmarkContext } from "../../../contexts/LandmarkContext.js";
import { AuthContext } from "../../../contexts/AuthContext.js";

export const RecourceGuard = ({ children }) => {
  const { getLandmark } = useLandmarkContext();
  const { userId } = useContext(AuthContext);
  const { landmarkId } = useParams();

  const currentLandmark = getLandmark(landmarkId);

  if (currentLandmark && currentLandmark._ownerId !== userId) {
    return <Navigate to={`/catalog/${landmarkId}`} replace />;
  }
  return children ? children : <Outlet />;
};
