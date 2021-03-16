import axios from "axios";





export default {
  getApps: function () {
    return axios.get("/api/logs");
  },
  getOne: function (id) {
    return axios.get("/api/logs/" + id);
  },
  // deleteOne: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  postOne: function (logData) {
    return axios.post("/api/logs", logData);
  }
};
