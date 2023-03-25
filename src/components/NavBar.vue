<template>
    <div>
        <nav class="navbar navbar-expand-lg" style="background-color: crimson;">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">KG Book Store</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><router-link to="/login">LogIn</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/signup">SignUp</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/books">Books</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/cart">Cart</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/adminLog">Admin</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/profile">Profile</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/contact">Contact Us</router-link></a>
                  </li>
                </ul>
                <div>
                </div>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
              </div>
              
            </div>
          </nav>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color: black;
    }
</style>