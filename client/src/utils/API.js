import axios from "axios";

export default {
  apiResults: function (url) {
    return axios.get(url);
  },
  getApps: function () {
    return axios.get("/api/logs");
  },
  getStatus: function (status) {
    return axios.get("/api/logs/", { params: { status } });
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
  newLog: function (id, dataId) {
    return axios.put("/api/user/newapp/" + id, dataId);
  },
  newNote: function (id, noteData) {
    return axios.put("/api/logs/note/" + id, noteData);
  },
  signUp: function (formData) {
    return axios.post("/api/user/signup", formData);
  },
  logIn: function (formData) {
    return axios.post("/api/user/login", formData);
  },
  getUser: function (id) {
    return axios.get("/api/user/info/" + id);
  },
  logOut: function () {
    return axios.get("/api/user/logout");
  }
};
