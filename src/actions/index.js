import API from "../utils/API";

export const GET_ALL = "GET_ALL";

export const getAll = () => {
  return {
    type: GET_ALL,
    payload: API.GetAll().then(({ data }) => {
      let { results } = data;
      return results;
    }),
  };
};
