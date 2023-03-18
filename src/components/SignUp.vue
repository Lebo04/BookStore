<template>

  <div class="register">
    <div class="divider">
      <div style="width: 20rem;">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          deleniti, architecto suscipit, natus neque adipisci reprehenderit
          molestias corporis earum pariatur veniam non numquam id quam? Eaque
          accusamus autem magni pariatur.
        </p>
      </div>
      <div>
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fa fa-person"></i
          ></span>
        </div>
        <br />
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fa fa-person"></i
          ></span>
        </div>
        <br />
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1">
            <i class="fa fa-envelope"></i
          ></span>
        </div>
        <br />
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fa fa-phone"></i
          ></span>
        </div>
        <br />
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1">
            <i class="fa-solid fa-person-circle-exclamation"></i>
          </span>
        </div>
        <br />
        <div class="form-control-wrapper">
          <span class="input-group-text" id="basic-addon1">
            <i class="fa-solid fa-person-circle-check"></i>
          </span>
        </div>
      </div>
      
    </div>
    <div class="container-fluid">
        <h2 class="display">Registration</h2>

      <div class="row w-50">
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
              </span>
            </div>
            <br />
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="lastName"
                  required
                  v-model="payload.lastName"
                />
              </span>
            </div>
            <br />
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  v-model="payload.emailAdd"
                />
              </span>
            </div>
            <br />
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cellphone"
                  required
                  v-model="payload.cellphoneNum"
                />
              </span>
            </div>
            <br />
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="payload.userPass"
                />
              </span>
            </div>
            <br />
            <div class="form-control-wrapper">
              <span class="inline">
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
                class="btn w-25"
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
</template>
<script>
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
.divider {
  background-color: lightslategray;
  padding-left: 10rem;
  height: 100vh;
  padding-top: 13rem;
  display: flex;
}

.register {
  display: flex;
}

.register i {
  font-size: 1.5rem;
}
.container-fluid {
  margin-left: -0.01rem;
  background-color: crimson;
  padding-top: 10.1rem;
}

.container-fluid .row {
  margin-left: -1.5rem;
}

span,
input {
  border: none;
  border-radius: 0rem;
}
.display {
  transform: translateX(-30%);
  margin-top: -8rem;
  margin-bottom: 7.3rem;
  position: relative;
  text-align: center;
  font-weight: 600;
  font-size: 3rem;
  color: black;
}

.display::before {
  content: "";
  position: absolute;
  bottom: -1rem;
  left: 50%;
  width: 17rem;
  height: 0.3rem;
  background: #111;
  transform: translateX(-50%);
}
.display::after {
  position: absolute;
  left: 50%;
}
</style>
