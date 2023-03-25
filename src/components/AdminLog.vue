<template>
  <div>
    <!-- Section: Design Block -->
    <section class="text-center text-lg-start">
      <div class="card mb-3">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img
              src="https://i.postimg.cc/SxP8LWHz/th.jpg"
              alt="Trendy Pants and Shoes"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">
              <form @submit.prevent="login">
                <h2>LogIn</h2>
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="form2Example1" class="form-control" v-model="payload.emailAdd" />
                  <label class="form-label" for="form2Example1"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    v-model="payload.adminPass"
                  />
                  <label class="form-label" for="form2Example2">Password</label>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                    <!-- Checkbox -->
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                        checked
                      />
                      <label class="form-check-label" for="form2Example31">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div class="col">
                    <!-- Simple link -->
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign in
                </button>
                or
            <router-link to="/adminSign">Sign Up</router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>
<script>
export default {
    data() {
    return {
      payload: {
        emailAdd: "", 
        adminPass: "",
      },
    };
  },
  computed: {
    loggedUser() {
     return this.$store.state.loggedUser
    },
    adminMsg() {
      return this.$store.state.message
    }
  },
  methods: {
    async login() {
     await this.$store.dispatch('AdminSignIn', this.payload)
      if(this.loggedUser) {
        alert('Logged in successfully')
        this.$router.push({name: 'adminPage'});
      }
 
    }
  }
};
</script>
<style scoped>
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
