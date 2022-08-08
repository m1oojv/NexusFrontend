import axios from "axios";

export default axios.create({
  baseURL: "https://027krdmq29.execute-api.ap-southeast-1.amazonaws.com/",
  headers: {
    "Content-type": "application/json",
  },
});
