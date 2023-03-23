<template>
  <div>

  </div>
  <div class="log">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        {{ this.loggedUser?.firstName }}
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required v-model="payload.emailAdd">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" required v-model="payload.userPass">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <label for="" v-show="userMsg">{{userMsg}}</label>
      <br>
      3

      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="links">
        <router-link to="/forgot">Forgot password</router-link>
        <br />
        <a href=""><router-link to="/signup">Sign Up</router-link></a>
      </div>
    </form>
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
     return this.$store.state.loggedUser
    },
    userMsg() {
      return this.$store.state.message
    }
  },
  methods: {
    login() {
      this.$store.dispatch('signIn', this.payload)
    }
  }
};
</script>
<style scoped>
.log {
  background-color: black;
  height: 92vh;
  display: flex;
  background-image: url(https://i.postimg.cc/cHr4pgTJ/464155.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
form {
  transform: translateY(60%);
  width: 20rem;
  height: 17rem;
  box-sizing: border-box;
  align-items: center;
  margin-left: 35rem;
}

.links {
  margin-top: 2rem;
  margin-left: 11rem;
  text-align: end;
}
</style>
