import { createStore } from "vuex";
import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
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
    deletedUser: null,
    cart: null,
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
      state.deletedUser = value;
    },
    setAdmins(state, value) {
      state.Admins = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
      state.userAuth = true;
    },
    setToken(state, value) {
      state.token = value;
    },
    setCart(state, value) {
      state.cart = value;
    },
    sorting: (state) => {
      state.books.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },
    // filtering: (state) => {
    //   try {
    //     if (!shoe.value.length) throw "Enter a shoe name";
    //     heelsList = heelsList.filter((items) => {
    //       return state.proName.toLowerCase().includes(shoe.value.toLowerCase());
    //     });
    //     if (!heelsList.length) throw "This shoe is not yet available";
    //     display();
    //   } catch (data) {
    //     item.innerHTML = data;
    //   } 
    // }
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
      const res = await axios.post(`${bookURL}/registerUser`, payload);
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
        cookies.set("RightUser", token);
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
    async deleteUser(context, id) {
      const res = await axios.delete(`${bookURL}/user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteAdmin(context, id) {
      const res = await axios.delete(`${bookURL}/admin/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setAdmins", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteItem(context, id) {
      const res = await axios.delete(`${bookURL}/item/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setItems", result);
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
      const res = await axios.post(`${bookURL}/user/${id}/cart`);
      console.log("Statement 2 reached");
      const { result, err } = await res.data;
      if (result) {
        console.log(result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    },
  },
  modules: {},
});
