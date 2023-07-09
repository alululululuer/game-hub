import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b02ab124bd76468992b5fcaf044d8cd7",
  },
});
