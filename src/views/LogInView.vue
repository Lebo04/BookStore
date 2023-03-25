<template>
  <div class="login">
    <div class="logo" style="width: 30rem">
      <img
        src="https://i.postimg.cc/SxP8LWHz/th.jpg"
        alt=""
        style="height: 20rem; margin-top: 10rem"
      />
    </div>

    <div class="log">
      <form @submit.prevent="login">
        <h2>LogIn</h2>
        <div class="mb-3">
          {{ this.loggedUser?.firstName }}
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            required
            v-model="payload.emailAdd"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            v-model="payload.userPass"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            required
          />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <label for="" v-show="userMsg">{{ userMsg }}</label>
        <br />

        <button type="submit" class="btn btn-primary">Submit</button>
        <div class="links">
          <router-link to="/forgot">Forgot password</router-link>
          <br />
          <a href=""><router-link to="/signup">Sign Up</router-link></a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
    userMsg() {
      return this.$store.state.message;
    },
  },
  methods: {
    async login() {
      await this.$store.dispatch("signIn", this.payload);
      if (this.loggedUser) {
        alert("Logged in successfully");
        this.$router.push({ name: "welcomeComp" });
      }
    },
  },
};
</script>
<style scoped>
.login {
  display: flex;
}

.logo {
  background-color: lightslategray;
}
.form-control {
  border: none;
  background: transparent;
  border-bottom: 0.1rem solid black;
  border-radius: 0;
  outline: none;
}
.log {
  background-color: crimson;
  height: 100vh;
  width: 70rem;
}
form {
  transform: translateY(60%);
  height: 17rem;
  box-sizing: border-box;
  align-items: center;
  margin-left: 15rem;
  margin-right: 25rem;
}

.links {
  margin-top: 2rem;
  margin-left: 11rem;
  text-align: end;
}
</style>
