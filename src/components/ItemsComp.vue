<template>
  <h1 class="title">Books</h1>
  
  <div v-if="books == undefined">
    <SpinnerComp />
  </div>

  <div class="container">
 
    <div class="row">
      <div class="col-md-6 g-3" v-for="book in books" :key="book.id">
        <div class="card" style="width: 30rem; height: 16rem">
          <div>
            <img
              :src="book.imgURL"
              class="card-img-top"
              :alt="book.prodName"
              style="width: 15rem; height: 16rem"
            />
          </div>

          <div class="card-body">
            <h5 class="card-title">{{ book.prodName }}</h5>
            <h6>{{ book.category }}</h6>
            <router-link v-if="this.$store.state.userAuth" :to="{ name: 'single', params: { id: book.id } }"
              >View more..</router-link
            >
            <router-link v-if="this.$store.state.userAuth" :to="{ name: 'cart', params: { id: book.id } }"
              >View more..</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SpinnerComp from './SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    spinner() {
      return this.$store.state.spinnerShow
    }
  },
  created() {
    this.$store.dispatch("getItems");
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

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
