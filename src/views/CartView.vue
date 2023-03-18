<template>
    <div>
        
      <h2>cart</h2>
       

      <table>
        <thead>
          <th>items</th>
          <th>price</th>
        </thead>
        <tbody>
          <tr>
            <td>{{cart?.prodName}}</td>
            <td>{{cart?.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
    computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  created() {
    this.$store.dispatch("addToCart", this.$route.params.id);
  }, 
}
</script>
<style>
    
</style>