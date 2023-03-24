<template>
  <div class="home">
    <img src="" alt="" />
    <h1>KG BOOK STORE</h1>
    <h2>Where stories get wings and dreams come true.</h2>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'homeView'
};
</script>

<style>
:root {
  --typewriterSpeed: 3s;
  --typewriterCharacters: 33;
}
.home {
  background-image: url("https://i.postimg.cc/htGmqcMf/2795953.jpg");
  background-size: cover;
  height: 100vh;
}

.home h2, .home h1 {
  color: white;
  transform: translateY(400%);
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  white-space: nowrap;
  overflow: hidden;
}

.home h2 {
  position: relative;
}

.home h2::before,
.home h2::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.home h2::before {
  background-color: crimson;
  animation: typewriter 7s steps(34) forwards;
}

.home h2::after {
  width: .125em;
  background-color: black;
  animation: typewriter 4s steps(34) forwards, blink typewriter 4s steps(34) infinite;
}

@keyframes typewriter {
  to {
    left: 100%;
  }
}
</style>
