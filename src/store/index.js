import { createStore } from "vuex";
import axios from "axios";
const bookURL = "https://kg-bookstore.onrender.com";
// const bookURL = "http://localhost:3000";

export default createStore({
  state: {
    Users: null,
    user: null,
    userAuth: false,
    token: null,
    books: null,
    book: null,
    Admins: null,
    admin: null,
    spinnerShow: true,
    message: null,
    loggedUser: null,
    cart: null
  },
  getters: {},
  mutations: {
    setItems(state, value) {
      state.books = value;
    },
    setItem(state, value) {
      state.book = value;
    },
    setUsers(state, value) {
      state.Users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    deleteUser(state, value) {
      state.user = value;
    },
    setAdmins(state, value) {
      state.Admins = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
      state.userAuth = true
    },
    setToken(state, value) {
      state.token = value;
    },
    setCart(state, value) {
      state.cart = value;
    }
  },
  actions: {
    async getItems(context) {
      const res = await axios.get(`${bookURL}/items`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItems", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async getItem(context, id) {
      const res = await axios.get(`${bookURL}/item/${id}`);
      console.log(id);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setItem", result[0]);
      } else {
        context.commit("setMessage", err);
      }
    },
    async getUsers(context) {
      const res = await axios.get(`${bookURL}/users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async registerUser(context, payload) {
      console.log("Statement 1 reached");
      const res = await axios.post(`${bookURL}/registerUser`, payload); // error
      console.log("Statement 2 reached");
      const { result, err } = await res.data;
      if (result) {
        console.log(result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async signIn(context, payload) {
      const res = await axios.post(`${bookURL}/login`, payload);
      const { result, msg, err, token } = await res.data;
      if (result) {
        context.commit("setLoggedUser", result);
        console.log(result);
        context.commit("setMessage", msg);
        context.commit("setToken", token);
      } else {
        context.commit("setMessage", err);
      }
    },
    async getAdmins(context) {
      const res = await axios.get(`${bookURL}/admins`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setAdmins", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteItem(context, id) {
      const res = await axios.delete(`${bookURL}/user/${id}`)
      const { result, err } = await res.data;
      if (result) {
        context.commit("deleteUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addBook(context, payload) {
      console.log("Statement 1 reached");
      const res = await axios.post(`${bookURL}/item`, payload); // error
      console.log("Statement 2 reached");
      const { result, err } = await res.data;
      if (result) {
        console.log(result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addToCart(context, id) {
      const res = await axios.post(`${bookURL}/user/${id}/cart`)
      console.log("Statement 2 reached");
      const { result, err } = await res.data;
      if (result) {
        console.log(result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    }
  },
  modules: {},
});
