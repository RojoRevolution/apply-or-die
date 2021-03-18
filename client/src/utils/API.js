import axios from "axios";

export default {
  getApps: function () {
    return axios.get("/api/logs");
  },
  getOne: function (id) {
    return axios.get("/api/logs/" + id);
  },
  deleteOne: function (id) {
    return axios.delete("/api/logs/" + id);
  },
  saveData: function (logData) {
    return axios.post("/api/logs", logData);
  },
  updateData: function (id, logData) {
    return axios.put(`/api/logs/${id}`, logData);
  },
  // updateData: function (id) {
  //   return axios.put("/api/logs/" + id);
  // }
  signUp: function (formData) {
    return axios.post("/api/user/signup", formData);
  },
  logIn: function (formData) {
    console.log('LOGIN FUNCTION')
    return axios.post("/api/user/login", formData);
  },

};
