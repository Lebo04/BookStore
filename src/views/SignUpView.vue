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
                  <input
                    class="form-control"
                    type="text"
                    placeholder="FirstName"
                    required
                    v-model="payload.firstName"
                  />
                  <i class="fa fa-person"></i>
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="lastName"
                    required
                    v-model="payload.lastName"
                  />
                  <i class="fa fa-person"></i>
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                    v-model="payload.emailAdd"
                  />
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Cellphone"
                    required
                    v-model="payload.cellphoneNum"
                  />
                  <i class="fa fa-phone"></i>
                </span>
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      v-model="payload.userPass"
                    />
                    <i class="fa-solid fa-person-circle-exclamation"></i>
                  </span>
                </div>
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      v-model="payload.confirmPass"
                    />
                    <i class="fa-solid fa-person-circle-check"></i>
                  </span>
                </div>
                <div class="form-control-wrapper">
                  <label class="form-control b-gradient" v-show="userMsg">{{
                    userMsg
                  }}</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const payload = {
      firstName: "",
      lastName: "",
      emailAdd: "",
      cellphoneNum: "",
      userPass: "",
      confirmPass: "",
    };
    const store = useStore();
    const signUp = () => {
      store.dispatch("registerUser", payload);
      store.dispatch("getUsers");
    };
    const userMsg = computed(() => store.state.message);
    return {
      payload,
      userMsg,
      signUp,
    };
  },
};
</script>
<style scoped>
    form {
        margin-top: 5rem;
        margin-left: 30rem;
        width: 40rem;
        height: 17rem;
        box-sizing: border-box; 
    }
</style>
