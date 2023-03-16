<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <h2 class="display">Registration</h2>
        <div class="row">
          <div class="col">
            <form @submit.prevent="signUp">
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa fa-person"></i>

                  <input
                    class="form-control"
                    type="text"
                    placeholder="FirstName"
                    required
                    v-model="payload.firstName"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa fa-person"></i>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="lastName"
                    required
                    v-model="payload.lastName"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa fa-envelope"></i>

                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                    v-model="payload.emailAdd"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa fa-phone"></i>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Cellphone"
                    required
                    v-model="payload.cellphoneNum"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa-solid fa-person-circle-exclamation"></i>

                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="payload.userPass"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <i class="fa-solid fa-person-circle-check"></i>

                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="payload.confirmPass"
                  />
                </span>
              </div>
              <div class="form-control-wrapper">
                <!-- <label class="form-control b-gradient" v-show="userMsg">{{
                    userMsg
                  }}</label> -->
              </div>
              <div class="form-control-wrapper">
                <button
                  type="submit"
                  class="btn w-100"
                  v-on:click="signUp(payload)"
                  style="background-color: crimson"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { computed } from "@vue/runtime-core";
// import { useStore } from "vuex";
export default {
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        cellphoneNum: "",
        userPass: "",
        confirmPass: "",
      },
    };
  },

  methods: {
    signUp() {
      let data = {
        firstName: this.payload.firstName,
        lastName: this.payload.lastName,
        emailAdd: this.payload.emailAdd,
        cellphoneNum: this.payload.cellphoneNum,
        userPass: this.payload.userPass,
      };
      console.log("Data: ", data);
      this.$store.dispatch("registerUser", data);
    },
  },

};
</script>
<style scoped>
form {
  margin-top: 5rem;
  margin-left: 30rem;
  width: 40rem;
  height: 30rem;
  box-sizing: border-box;
}
</style>
