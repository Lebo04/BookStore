<template>
  <div class="log">
    <div class="container">
        <!-- <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="email" class="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="addon-wrapping" required>
          </div> -->
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
.log {
    background-color: black;
    height: 92vh;
    display: flex;
    background-image: url(https://i.postimg.cc/cHr4pgTJ/464155.webp);
    background-repeat: no-repeat;
    background-size: cover;
}
.container {
    transform: translateY(60%);
  width: 20rem;
  height: 17rem;
  box-sizing: border-box;
  background-color: crimson;
}

.col .links {
    margin-top: 2rem;
    margin-left: 11rem;
    text-align: end;
}
</style>
