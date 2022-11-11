import axios from "axios";

const instance = axios.create({
  baseURL: "https://bookstore-73510.herokuapp.com/api",
});

export { instance as axios };
