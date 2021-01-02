import { GET_ALL } from "../actions";
import API from "../utils/API";
import axios from "axios";

const reducer = async (
  state = {
    user: [],
  },
  { type, payload }
) => {
  switch (type) {
    case GET_ALL:
      console.log(state);
      console.log(payload);
      const user = await payload;
      console.log(payload);
      return {
        ...state,
        user,
      };

    default:
      return state;
  }
};

export default reducer;
