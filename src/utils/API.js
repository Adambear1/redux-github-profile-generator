import axios from "axios";

export default {
  GetAll: () => {
    return axios.get("https://randomuser.me/api/?results=12&nat=u");
  },
};
