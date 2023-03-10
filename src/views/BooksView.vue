<template>
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
.card {
  flex-direction: column;
}
</style>
