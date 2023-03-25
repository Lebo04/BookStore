<template>
  <div class="about">
    <h1 class="title">About Us</h1>
    <img
      src="https://i.postimg.cc/cL6jMxbW/1-S81-O15rj-Kf-G-BFdn-NC6-GQ.jpghttps://i.postimg.cc/cL6jMxbW/1-S81-O15rj-Kf-G-BFdn-NC6-GQ.jpg"
      style="width: 15rem"
    />
    <p>
      Buy books online from independent sellers around the world. Fill your
      bookshelves with used books, the latest paperback bestsellers, collectible
      books such as first editions and signed copies, large print books,
      illustrated books, and forgotten out-of-print books from years gone by.
      We've even got coffee-table books for sale if you are looking for
      something substantial.
    </p>
    <p>
      World history is vast, and our books are the tip of the iceberg. Our list
      includes bestsellers, award winners and editor's picks from distinguished
      historians and biographers. From Churchill to Stalin, discover the past to
      better understand the future.
    </p>
    <p>
      You can de-stress with minimal expense. Reading books and escaping into
      imaginary worlds allows us respite from our everyday problems. Even six
      minutes of reading can reduce your stress levels by more than two thirds.
      This is more effective than watching television or playing games.
    </p>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.about {
  background-color: lightslategray;
  height: 130vh;
}
.about .title {
  position: relative;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
}

.about .title::before {
  content: "";
  position: absolute;
  bottom: 0rem;
  left: 50%;
  width: 13rem;
  height: 0.2rem;
  background: #111;
  transform: translateX(-50%);
}
.about .title::after {
  position: absolute;
  left: 50%;
}

.about p {
  margin: 2rem;
  font-size: 1.5rem;
}
</style>
