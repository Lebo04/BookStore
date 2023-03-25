<template>
  <div v-if="book == undefined">
    <SpinnerComp />
  </div>
  <h1 class="title">{{ book?.prodName }}</h1>
  <div class="container">
    <div class="row">
      <div class="col">
        <h5 class="card-title"></h5>

        <img
          :src="book?.imgURL"
          class="card-img-top"
          :alt="book?.prodName"
          style="width: 20rem; height: 20rem"
        />
      </div>
      <div class="col">
        <h6>Book Genre: {{ book?.category }}</h6>
        <h6>Price: R{{ book?.price }}</h6>
        <p>
          {{ book?.prodDescription }}
        </p>

        <button type="submit" @click="addToCart"><i class="fa-solid fa-cart-shopping"></i
          ></button>

      </div>
    </div>
  </div>
</template>
<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    SpinnerComp,
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  created() {
    this.$store.dispatch("getItem", this.$route.params.id);
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        userID: this.loggedUser?.userID,
        id: this.book.id,
        quantity: 1,
        prodName: this.book.prodName,
        price: this.book.price,
        imgURL: this.book.imgURL
      });
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
}
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
</style>
