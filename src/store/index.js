import { createStore } from 'vuex'
import axios from "axios";
const bookURL = "https://kg-bookstore.onrender.com";

export default createStore({
  state: {
    Users: null,
    user: null,
    books: null,
    item: null,
    showSpinner: true,
    message: null,
  },
  getters: {
  },
  mutations: {
    setItems(state, books) {
      state.books = books;
    },
    setItem(state, value) {
      state.books = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
  },
  actions: {
    async getItems(context) {
      const res = await axios.get(`${bookURL}/Items`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItems", results);
      } else {
        context.commit("setMessage", err);
      }
    },
  },
  modules: {
  }
})
