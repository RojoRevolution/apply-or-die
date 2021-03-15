import axios from "axios";





export default {
  getJobs: function () {
    return axios.get();
  },
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
