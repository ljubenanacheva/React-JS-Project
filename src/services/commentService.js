import { requestFactory } from "./requester.js";

const baseUrl = "http://localhost:3030/data/comments";

const request = requestFactory();

export const create = async (landmarkId, comment) => {
  try {
    const result = await request.post(baseUrl, { landmarkId, comment });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getAll = async (landmarkId) => {
  const query = encodeURIComponent(`landmarkId="${landmarkId}"`);
  const relationQuery = encodeURIComponent(`author=_ownerId:users`);
  try {
    const result = await request.get(
      `${baseUrl}?where=${query}&load=${relationQuery}`
    );
    const comments = Object.values(result);

    return comments;
  } catch (err) {
    console.log(err.message);
  }
};
