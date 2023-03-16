<template>
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
        <p>
          {{ book?.prodDescription }}
        </p>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
  created() {
    this.$store.dispatch("getItem", this.$route.params.id);
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
