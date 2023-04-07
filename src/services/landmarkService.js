import { requestFactory } from "./requester.js";
const baseUrl = "http://localhost:3030/data/landmarks";

export const landmarkServiceFactory = (token) => {
  const request = requestFactory(token);
  const getAll = async () => {
    const result = await request.get(baseUrl);
    const landmarks = Object.values(result);
    return landmarks;
  };
  const create = async (landmarkData) => {
    const result = await request.post(baseUrl, landmarkData);

    return result;
  };
  const getOne = async (landmarkId) => {
    const result = await request.get(`${baseUrl}/${landmarkId}`);
    return result;
  };
  const edit = (landmarkId, data) =>
    request.put(`${baseUrl}/${landmarkId}`, data);

  const deleteOne = (landmarkId) => {
    request.delete(`${baseUrl}/${landmarkId}`);
  };
  const getLandmarksByUser = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    return result;
  };

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteOne,
    getLandmarksByUser,
  };
};
