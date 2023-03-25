<template>
    <div v-if="loggedUser">
       <h2>Welcome {{loggedUser.firstName}}</h2> 
    </div>
</template>
<script>
export default {
    name: 'welcomeComp',
   computed: {
    loggedUser() {
        return this.$store.state.loggedUser
    }
   } 
}
</script>
<style scoped>
    
</style>