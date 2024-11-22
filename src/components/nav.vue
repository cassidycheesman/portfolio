<script>
</script>

<template>
  <div class = "nav">
  <b-button  variant="outline-*" class = "title">Cassidy Cheesman.</b-button>
  <div class = "tabs">
    <b-button variant="outline-*">Projects</b-button>
    <b-button variant="outline-*">Research</b-button>
    <b-button variant="outline-*">About</b-button>
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
  font-family: 'Times New Roman', Times, serif;
  font-size: 3.5rem;
  margin-right: 2rem; /* Add margin to move tabs to the left */
  padding-left: 7vw;
}

.tabs {
  display: flex;
  padding-right: 5vw;
  gap: 1.5rem; /* Increase the gap to increase spacing between items */
}

.tabs .b-button {
  font-family: Arial, sans-serif;
  font-size: 2rem;
}

.tabs .b-button:hover {
  text-decoration: underline;
}
</style>
