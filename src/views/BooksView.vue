<template>
  <h1 class="title">Books</h1>

  <div class="container">
    <div class="row">
      <div class="col-md-4 g-3" v-for="item in items" :key="item.prodID">
        <div class="card" style="width: 18rem">
          <div>
            <img :src="item.imgURL" class="card-img-top" :alt="item.prodName" />
          </div>

          <div class="card-body">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <a href="#" class="btn"
              ><router-link to="/single">View more...</router-link></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.state.books;
    },
  },
  created() {
    this.$store.dispatch("getItems");
  },
};
</script>
<style scoped>
.title {
  position: relative;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
}

.title::before {
  content: "";
  position: absolute;
  bottom: 0rem;
  left: 50%;
  width: 13rem;
  height: 0.2rem;
  background: #111;
  transform: translateX(-50%);
}
.title::after {
  position: absolute;
  left: 50%;
}
</style>
