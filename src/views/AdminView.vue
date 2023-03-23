<template>
    <div>
        <h2>User table</h2>
        <table class="table table-striped table-hover table">
          <thead>
            <tr>
              <th>id</th>
              <th>User Name</th>
              <th>User Surname</th>
              <th>Email Address</th>
              <th>Cellphone Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in users" :key="item.userID">
            <tr>
              <td>{{ item.userID }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.emailAdd }}</td>
              <td>{{ item.cellphoneNum }}</td>
              <td>
                <button class="delete" v-on:click="deleteUser(item.userID)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    
        <h2>Admin table</h2>
        <table class="table table-striped table-hover table">
          <thead>
            <tr>
              <th>id</th>
              <th>User Name</th>
              <th>User Surname</th>
              <th>Email Address</th>
              <th>Cellphone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in admins" :key="item.adminID">
            <tr>
              <td>{{ item.adminID }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.emailAdd }}</td>
              <td>{{ item.cellphoneNum }}</td>
              <td>
                <button
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onclick="updateProduct(${item.id})"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button class="delete" v-on:click="deleteAdmin(item.adminID)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    
        <h2>Products table</h2>
        <table class="table table-striped table-hover table">
          <thead>
            <tr>
              <th>id</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Author</th>
              <th>Published date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in items" :key="item.id">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.prodName }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.prodDescription }}</td>
              <td>{{ item.prodQuantity }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.publishDate }}</td>
              <td>
                <button
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onclick="updateProduct(${item.id})"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button class="delete" v-on:click="deleteItem(item.id)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
export default {
  computed: {
    users() {
      return this.$store.state.Users;
    },
    admins() {
      return this.$store.state.Admins;
    },
    items() {
      return this.$store.state.books;
    }
  },
  created() {
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getAdmins");
    this.$store.dispatch("getItems");
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    deleteAdmin(id) {
      this.$store.dispatch("deleteAdmin", id)
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id)
    }
  },
};
</script>
<style scoped>
    
</style>