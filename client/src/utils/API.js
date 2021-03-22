import axios from "axios";





export default {
  getApps: function () {
    return axios.get("/api/logs");
  },
  getStatus: function (status) {
    console.log("getStatus", status)
    return axios.get("/api/logs/", { params: { status } });
  },
  getOne: function (id) {
    return axios.get("/api/logs/" + id);
  },
  deleteOne: function (id) {
    return axios.delete("/api/logs/" + id);
  },
  saveData: function (logData) {
    console.log("Log Data: ", logData)
    return axios.post("/api/logs", logData);
  },
  updateData: function (id, logData) {
    console.log('id: ', id)
    console.log('logData: ', logData)
    return axios.put(`/api/logs/${id}`, logData);
  },
  newNote: function (id, noteData) {
    console.log("Client Side: ", id)
    console.log("Client Side: ", noteData)
    return axios.put("/api/logs/note/" + id, noteData);
  },
  signUp: function (formData) {
    console.log("Sign Up: ", formData)
    return axios.post("/api/user/signup", formData);
  },
  logIn: function (formData) {
    console.log('LOGIN FUNCTION')
    console.log('Data: ', formData)
    return axios.post("/api/user/login", formData);
  },
  getUser: function () {
    return axios.get("/api/user/info");
  }
};
