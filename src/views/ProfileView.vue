<template>
  <div class="my_account" v-if="loggedUser">


    <section class="vh-100" style="background-color: #f4f5f7;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style="border-radius: .5rem;">
                <div class="row g-0">
                  <div class="col-md-4 gradient-custom text-center text-black"
                    style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                    <h5>{{loggedUser.firstName}} {{loggedUser.lastName}}</h5>
                    <p>User</p>
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>User Profile</h6>
                      <hr class="mt-0 mb-4">
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">{{loggedUser.emailAdd}}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Phone</h6>
                          <p class="text-muted">{{loggedUser.cellphoneNum}}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr class="mt-0 mb-4">
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Recent</h6>
                          <p class="text-muted">Lorem ipsum</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p class="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-start">
                        <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                        <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                        <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    <div class="delete_screen">
      <div class="delete_modal">
        <h4>Are you sure you want to delete your account?</h4>
        <div class="del_buttons">
          <button @click="hideDelete()">Cancel</button>
          <button @click="deleteUser()">Delete</button>
        </div>
      </div>
    </div>
    <div class="edit_screen">
      <div class="edit_modal">
        <form @submit.prevent="update()">
          <div class="initials">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingText"
                placeholder="name@example.com"
                required
                v-model="this.updatingUser.firstName"
              />
              <label for="floatingText">First name</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingText"
                placeholder="name@example.com"
                required
                v-model="this.updatingUser.lastName"
              />
              <label for="floatingText">Surname</label>
            </div>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              v-model="this.updatingUser.emailAdd"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="number"
              required
              v-model="this.updatingUser.cellphoneNum"
            />
            <label for="floatingText">Phone number</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Male"
              required
              v-model="updatingUser.gender"
            />
            <label for="floatingPassword">Gender</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingText"
              placeholder="url"
              required
              v-model="updatingUser.userProfile"
            />
            <label for="floatingText">Image URL</label>
          </div>
          <div class="form-buttons">
            <button @click="hideEdit()">Cancel</button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
    <div class="left">
      <div class="logged_user">
        <div
          class="img"
          :style="{ backgroundImage: `url(${loggedUser.userProfile})` }"
        ></div>
        <h2 class="name">
          {{ loggedUser.firstName }} {{ loggedUser.lastName }}
        </h2>
        <div class="details">
          <h3>E-mail Address :</h3>
          <h3>{{ loggedUser.emailAdd }}</h3>
        </div>
        <div class="details">
          <h3>Phone number :</h3>
          <h3>{{ loggedUser.cellphoneNo }}</h3>
        </div>
        <div class="details">
          <h3>Gender :</h3>
          <h3>{{ loggedUser.gender }}</h3>
        </div>
        <div class="details">
          <h3>Role :</h3>
          <h3>{{ loggedUser.userRole }}</h3>
        </div>
        <div class="buttons">
          <button class="btn_edit" @click="showEdit()">
            <i class="fa-solid fa-pen-to-square"></i> Edit account
          </button>
          <button class="btn_delete" @click="showDelete()">
            <i class="fa-solid fa-trash"></i> Delete account
          </button>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "myAccount",
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  data() {
    return {
      updatingUser: {
        firstName: this.$store.state.loggedUser?.firstName,
        lastName: this.$store.state.loggedUser?.lastName,
        emailAdd: this.$store.state.loggedUser?.emailAdd,
        cellphoneNum: this.$store.state.loggedUser?.cellphoneNum,
        gender: this.$store.state.loggedUser?.gender,
        userProfile: this.$store.state.loggedUser?.userProfile,
      },
    };
  },
  methods: {
    showDelete() {
      document.querySelector(".delete_screen").id = "showModal";
    },
    hideDelete() {
      document.querySelector(".delete_screen").id = "hideModal";
    },
    update() {
      this.$store.dispatch(
        "updateUser",
        this.legitUser.userID,
        this.updatingUser
      );
      this.hideEdit();
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.legitUser?.userID);
        // hide.hideDelete();
    },
    showEdit() {
      document.querySelector(".edit_screen").id = "showModal";
      console.log(this.updatingUser);
    }, 
    hideEdit() {
      document.querySelector(".edit_screen").id = "hideModal";
    },
  },
};
</script>

<style scoped></style>
