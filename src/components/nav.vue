<script>
</script>

<template>
  <div class = "nav">
  <b-button  variant="outline-*" class = "title">Cassidy Cheesman<span class="title-period">.</span></b-button>
  <div class = "tabs">
    <b-button  class = "tabbutton" variant="outline-*">Projects</b-button>
    <b-button class = "tabbutton" variant="outline-*">Research</b-button>
    <b-button class = "tabbutton" variant="outline-*">About</b-button>
  </div>
</div>

</template>

<style scoped>

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-right: 2rem; /* Add margin to move tabs to the left */
  padding-left: 7vw;
}

.title-period {
  color: rgb(44, 118, 192); /* Change this to the desired color */
}

.tabs {
  display: flex;
  padding-right: 5vw;
  gap: 1.5rem; /* Increase the gap to increase spacing between items */
}

.tabbutton {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.25rem;
  text-decoration: underline;
  text-decoration-color: rgb(44, 118, 192);
}

</style>
