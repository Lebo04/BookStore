<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Add Book
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="prodName"
                      required
                      v-model="payload.prodName"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="description"
                      required
                      v-model="payload.prodDescription"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="category"
                      required
                      v-model="payload.category"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="price"
                      required
                      v-model="payload.price"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="author"
                      required
                      v-model="payload.author"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Password"
                      required
                      v-model="payload.publishDate"
                    />
                  </span>
                </div>
                <br />
                <div class="form-control-wrapper">
                  <span class="inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="imgURL"
                      required
                      v-model="payload.imgURL"
                    />
                  </span>
                </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="addBook">Save</button>
        </div>
      </div>
    </div>
  </div> 
    </div>
</template>
<script>
export default {
    data() {
    return {
      payload: {
        prodName: "",
        prodDescription: "",
        category: "",
        price: "",
        imgURL: "",
        author: "",
        publishDate: ""
      },
    };
  },

  methods: {
    addBook() {
      this.$store.dispatch("addBook", this.payload);
    },
  },
}
</script>
<style scoped>
    
</style>