<template>
  <div>
    <!-- <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" />
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col">
          <form>
            <div class="fields">
              <label for="email">Full name</label>
              <div class="field email">
                <input
                  type="email"
                  name="Email"
                  class="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <br />
              <label for="password">Password</label>
              <div class="field password">
                <input
                  type="password"
                  name="password"
                  class="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <br />
            <div class="button">
              <button type="submit">Log In</button>
            </div>
          </form>
          <div class="links">
            <a href="">Forgot password</a>
            <br />
            <a href=""><router-link to="/signup">Sign Up</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  margin-top: 10rem;
  width: 20rem;
  height: 17rem;
  box-sizing: border-box;
  /*background-color: ;*/
}

.col .links {
    margin-top: 2rem;
    margin-left: 11rem;
    text-align: end;
}
</style>
