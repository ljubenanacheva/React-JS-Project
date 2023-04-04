import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { landmarkServiceFactory } from "../services/landmarkService.js";

export const LandmarkContext = createContext();

export const LandmarkProvider = ({ children }) => {
  const navigate = useNavigate();
  const [landmarks, setLandmarks] = useState([]);

  const landmarkService = landmarkServiceFactory(); //auth.AccessToken

  useEffect(() => {
    landmarkService.getAll().then((result) => {
      setLandmarks(result);
    });
  }, []);

  const onCreateLandmarkSubmit = async (data) => {
    const newLandmark = await landmarkService.create(data);
    setLandmarks((state) => [...state, newLandmark]);
    navigate("/catalog");
  };

  const contextValues = {
    landmarks,
    onCreateLandmarkSubmit,
  };

  return (
    <LandmarkContext.Provider value={contextValues}>
      {children}
    </LandmarkContext.Provider>
  );
};

export const useLandmarkContext = () => {
  const context = useContext(LandmarkContext);
  return context;
};
