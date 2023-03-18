<template>    
<div class="loader"></div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.loader {
    width: 50px;
    height: 50px;
    position: relative;
    margin-left: 40rem;
    margin-top: 10rem;
   }
   
   .loader::before,
   .loader::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: rotate9 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
   }
   
   .loader::before {
    background-color: crimson;
   }
   
   .loader::after {
    background-color: black;
    animation-delay: .5s;
   }
   
   @keyframes rotate9 {
    0%,100% {
     left: 50px;
    }
   
    25% {
     transform: scale(.3);
    }
   
    50% {
     left: 0;
    }
   
    75% {
     transform: scale(1);
    }
   }
</style>