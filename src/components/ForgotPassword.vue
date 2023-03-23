<template>
    <div>
       <form @submit.prevent="handleSubmit">
        <h3>Forgot Password</h3>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="emailAdd" placeholder="Email"/>
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
       </form> 
    </div>
</template>
<script>
// import axios from 'axios';
export default {
    name: 'ForgotPassword',
    data() {
        return {
            emailAdd: ''
        }
    },
    methods: {
       async handleSubmit() {
            // const res = await axios.post('/forgotPassword', {
            //    email: this.emailAdd
            // })
        }
    },
}
</script>
<style>
    
</style>